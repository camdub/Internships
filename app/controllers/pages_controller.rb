class PagesController < ApplicationController
    
    def index
      #authorize! :read, :page
      #authorize! :index, :pages
      #authorize! 'index'.to_sym, 'pages'.to_sym
    end
    
    def myguide
      #authorize! :view, :myguide
      #respond_to do |format|
       # format.html { render :layout => 'layouts/myguide' } # myguide.html.erb
      #end
    end
    
    def map
      
    end
    
    def forbidden403
      
    end
    
    def myguide_admin_dashboard
      @section = 'myguide'
    end    
    
    def admin_roles
      @users = User.all
    end 
end
