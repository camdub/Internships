class InternshipsController < ApplicationController
  # GET /internships
  # GET /internships.xml
  def index
    @internships = Internship.all
    
    
    

    # Very inefficient when users table has thousands of rows.
      
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @internships }
      format.json  {
        internships = Hash.new
        
        @internships.each do |internship|
          internship[:provider] = internship.provider
          internship[:locations] = internship.locations
          internship[:languages] = internship.languages
          internship[:fields] = internship.fields
          
          #this is alternate and cleaner, but a lot more work.  might be worth it for the project... might not...
          
          
          
          internship.locations.each do |location|
            internships[location.country.un_code] = Array.new if internships[location.country.un_code] == nil
            internships[location.country.un_code] << {
              'id' => internship.id, 
              'name' => internship.name, 
              'provider_name' => internship.provider.name,
              'city' => location.city, 
              'state' => location.state.name, 
              'country' => location.country.name, 
            }
          end
          /
          internships << {
              'id' => internship.id, 
              'name' => internship.name, 
              'provider_name' => internship.provider.name, 
              'locations' => Array.new 
          }
          internship.locations.each do |location|
            internships.last['locations'] << {
              'city' => location.city, 
              'state' => location.state.name, 
              'country' => location.country.name, 
              'country_code' => location.country.un_code 
            }
          end
          /
          
          #ends here, use with render :json => internships
          #this second one would be better for giving short info at first, but the other would port ALL of the data on load, pros and cons
        end
        #render :json => @internships
        render :json => internships
        
      }
    end
  end

  # GET /internships/1
  # GET /internships/1.xml
  def show
    @internship = Internship.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @internship }
      format.json { render :json => @internship }
    end
  end

  # GET /internships/new
  # GET /internships/new.xml
  def new
    @internship = Internship.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @internship }
    end
  end

  # GET /internships/1/edit
  def edit
    @internship = Internship.find(params[:id])
  end

  # POST /internships
  # POST /internships.xml
  def create
        #@posts = Post.find(:all)
    @internship = Internship.new(params[:internship])

    respond_to do |format|
      if @internship.save
        format.html { redirect_to(@internship, :notice => 'Internship was successfully created.') }
        format.xml  { render :xml => @internship, :status => :created, :location => @internship }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @internship.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /internships/1
  # PUT /internships/1.xml
  def update
    @internship = Internship.find(params[:id])

    respond_to do |format|
      if @internship.update_attributes(params[:internship])
        format.html { redirect_to(@internship, :notice => 'Internship was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @internship.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /internships/1
  # DELETE /internships/1.xml
  def destroy
    @internship = Internship.find(params[:id])
    @internship.destroy

    respond_to do |format|
      format.html { redirect_to(internships_url) }
      format.xml  { head :ok }
    end
  end
end
