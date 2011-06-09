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
  # GET /internships/1.json
  def show
    @internship = Internship.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @internship }
      format.json {
        internship = {
          'id' => @internship.id, 
          'name' => @internship.name, 
          'is_paid' => @internship.is_paid,
          'is_full_time' => @internship.is_full_time, 
          'is_part_time' => @internship.is_part_time, 
          'stipend' => @internship.stipend,
          'description' => @internship.description,
          'qualifications' => @internship.qualifications,
          'qualifications_academic' => @internship.qualifications_academic,
          'for_credit' => @internship.for_credit,
          'requires_us_citizenship' => @internship.requires_us_citizenship,
          'application_process' => @internship.application_process,
          'deadline' => @internship.deadline,
          'academic_contact_name' => false,
          'provider_contact_name' => false,
          'provider_name' => @internship.provider.name,
          'locations' => Array.new,
          'academic_focuses' => Array.new,
          'fields' => Array.new,
          'languages' => Array.new,
          'financial_assistance_options' => Array.new,
          'semesters' => Array.new
        }
        #These 2 fields are one or the other, so they are set here on thier own so we avoid calling 'name' on an nil object
        internship['academic_contact_name'] = @internship.academic_contact.name if @internship.academic_contact != nil
        internship['provider_contact_name'] = @internship.provider_contact.name if @internship.provider_contact != nil
        
        @internship.locations.each do |location|
          internship['locations'] << {
            'city' => location.city, 
            'state' => location.state.name, 
            'country' => location.country.name
          }
        end
        @internship.academic_focuses.each do |academic_focus|
          internship['academic_focuses'] << {
            'name' => academic_focus.name, 
            'type' => academic_focus.academic_focus_type.name
          }
        end
        @internship.fields.each do |field|
          internship['fields'] << {
            'name' => field.name,
            'industry' => field.industry.name
          }
        end
        @internship.languages.each do |language|
          internship['languages'] << {
            'name' => language.name
          }
        end
        @internship.financial_assistance_options.each do |financial_assistance_option|
          internship['financial_assistance_options'] << {
            'name' => financial_assistance_option.name,
            'type' => financial_assistance_option.financial_assistance_option_type.name,
            'how_much' => financial_assistance_option.how_much,
            'qualifications' => financial_assistance_option.qualifications,
            'source' => financial_assistance_option.source,
            'website' => financial_assistance_option.website            
          }
        end
        @internship.semesters.each do |semester|
          internship['semesters'] << {
            'name' => semester.name
          }
        end
        
        
        

        render :json => internship 
      }
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
