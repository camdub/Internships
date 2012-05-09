module Myguide
  class MyguideController < ApplicationController
    def index
      @myguide_user_id = params[:myguide_user_id]
      authorize! :myguide, :pages, @myguide_user_id if params[:format] != 'json'

      #authorize! :view, :myguide
      #respond_to do |format|
       # format.html { render :layout => 'layouts/myguide' } # myguide.html.erb
      #end
    end
  end
end
