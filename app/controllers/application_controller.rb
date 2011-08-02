class ApplicationController < ActionController::Base
  protect_from_forgery
  
#  include Rails.application.routes.url_helpers
#  include ActionView::Helpers::UrlHelper

  before_filter :authenticate, :except => [:cas_response] 
  
  def cas_response
    cookies[:net_id] = get_net_id(params[:ticket])
    cookies[:page_redirect] = "http://#{request.env['HTTP_HOST']}" if not cookies[:page_redirect]
    redirect_to cookies[:page_redirect]
  end
  
  private
  def current_user
    @current_user = false
    if cookies[:net_id]
      puts "before user find"
      @current_user = User.find_by_net_id(cookies[:net_id])
      puts "after user find"
      @current_user = User.create(:net_id => cookies[:net_id]) if not @current_user
    end
    if @current_user
      if @current_user[:firstname]
        @current_user[:display_name] = @current_user[:firstname] + " " + @current_user[:lastname]
      else
        @current_user[:display_name] = @current_user[:net_id]
      end
    end

    @current_user
    
  end
  def authenticate
    cookies[:page_redirect] = request.url
    
    if not current_user
      redirect_to "https://cas.byu.edu/cas/login?&method=POST&service=http://#{request.env['HTTP_HOST'] + cas_response_redirect_path}"
    end
  end
  def get_net_id (ticket)
    require 'net/http'
    require 'net/https'
    
    http = Net::HTTP.new('cas.byu.edu', 443)
    http.use_ssl = true
    path = '/cas/validate'
    data = "service=http://#{request.env['HTTP_HOST'] + cas_response_redirect_path}&ticket=#{ticket}"
    head, body = http.post(path, data)
    yes, netid = body.split("\n")
    netid
  end
end
