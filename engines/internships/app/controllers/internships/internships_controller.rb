module Internships
  class InternshipsController < Internships::ApplicationController  

    before_filter :set_section  
    
    def set_section
      @section = 'internship'
    end
      
  
    # GET /internships
    # GET /internships.xml
    def index
      @internships = Internship.all

      # Very inefficient when users table has thousands of rows.
      respond_to do |format|
        format.html # index.html.erb
        format.xml  { render :xml => @internships }
        format.json  {

          if params[:filters] != nil
            @internships = Internship.joins(:locations, :fields, :languages, :academic_focuses).select("internships_internships.id").group("internships_internships.id")
          
            @internships = @internships.where("internships.for_credit = ?", true)  if params[:for_credit] == 'true'
            @internships = @internships.where("internships.for_credit = ?", false)  if params[:for_credit] == 'false'
        
            @internships = @internships.where("internships.is_part_time = ?", true)  if params[:part_time] == 'true'
            @internships = @internships.where("internships.is_part_time = ?", false)  if params[:part_time] == 'false'

            @internships = @internships.where("internships.is_full_time = ?", true)  if params[:full_time] == 'true'
            @internships = @internships.where("internships.is_full_time = ?", false)  if params[:full_time] == 'false'

            @internships = @internships.where("internships.requires_us_citizenship = ?", true)  if params[:us_citizenship] == 'true'
            @internships = @internships.where("internships.requires_us_citizenship = ?", false)  if params[:us_citizenship] == 'false'

            @internships = @internships.where("internships.is_paid = ?", true)  if params[:paid] == 'true'
            @internships = @internships.where("internships.is_paid = ?", false)  if params[:paid] == 'false'

            @internships = @internships.where("languages.id IN (?)", params[:languages].split(',') << Language.find_by_name('unspecified')) if params[:languages] != 'null'
            @internships = @internships.where("fields.id IN (?)", params[:fields].split(',') << Field.find_by_name('unspecified')) if params[:fields] != 'null'
            @internships = @internships.where("fields.industry_id IN (?)", params[:industries].split(',') << Industry.find_by_name('unspecified')) if params[:industries] != 'null'
            @internships = @internships.where("internships.provider_id IN (?)", params[:providers].split(',') << Provider.find_by_name('unspecified')) if params[:providers] != 'null'
            @internships = @internships.where("locations.id IN (?)", params[:locations].split(',')) if params[:locations] != 'null'
            @internships = @internships.where("academic_focuses.id IN (?)", params[:academic_focuses].split(',') << AcademicFocus.find_by_name('unspecified')) if params[:academic_focuses] != 'null'
          end
        
          #Format Response
          internships = Hash.new
          @internships.each do |internship|
            internship = Internship.find(internship.id)
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
          end
        
          #send response
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
    
      @internship.user = @current_user if @internship.user == nil
    
      respond_to do |format|
        format.html # new.html.erb
        format.xml  { render :xml => @internship }
      end
    end

    # GET /internships/1/edit
    def edit
      @internship = Internship.find(params[:id])
      authorize! :update, @internship
    end

    # POST /internships
    # POST /internships.xml
    def create
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
  
    def dashboard
      respond_to do |format|
        format.html # dashboard.html.erb
      end
    end
  end
end