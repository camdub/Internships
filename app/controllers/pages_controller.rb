class PagesController < ApplicationController
    
    def index
      
    end
    
    def myguide
      #respond_to do |format|
       # format.html { render :layout => 'layouts/myguide' } # myguide.html.erb
      #end
    end
    
    def forbidden403
      
    end
    
    def myguide_admin_dashboard
      @section = 'myguide'
    end    
end
