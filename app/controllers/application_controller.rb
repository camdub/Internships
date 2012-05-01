class ApplicationController < ActionController::Base
  protect_from_forgery

  #check_authorization  
  
#  include Rails.application.routes.url_helpers
#  include ActionView::Helpers::UrlHelper

  before_filter :authenticate, :except => [:cas_response]
  #before_filter :access, :except => [:cas_response, :authenticate, :current_user]
  
  before_filter :authorize, :except => [:cas_response, :authenticate, :current_user]
  
  def authorize
    puts params[:action]
    puts params[:controller]
    puts "---------------------------------------------------------------------------------------------------------------------------"
    
    authorize! params[:action].to_s.to_sym, params[:controller].to_s.to_sym if params[:format] != 'json'
  end
  
  def cas_response
    cookies[:net_id] = get_net_id(params[:ticket])
    cookies[:page_redirect] = "http://#{request.env['HTTP_HOST']}" if not cookies[:page_redirect]
    redirect_to cookies[:page_redirect]
  end
  
  private
  def current_user
    @current_user = false
    if cookies[:net_id]
      @current_user = User.find_by_net_id(cookies[:net_id])
      @current_user = User.create(:net_id => cookies[:net_id], :roles => [Role.find_by_name('student')]) if (not @current_user) && (cookies[:net_id] != "")
    end
    @current_user    
  end
  
  def authenticate
    #ADDRED FOR OFFLINE TESTING - UNCOMMENT LATER
    #cookies[:net_id] = 'kcalmes'
    puts "---------------------------------------------------------------------------------------------------------------------------"
    cookies[:page_redirect] = request.url
  
    if not current_user
      puts "not current user"
      puts "https://cas.byu.edu/cas/login?&method=POST&service=http://#{request.env['HTTP_HOST'] + main_app.cas_response_redirect_path}"
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
  
  
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url, :alert => exception.message
  end
  
end
