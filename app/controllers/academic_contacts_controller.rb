class AcademicContactsController < ApplicationController

  before_filter :set_section  
    
  def set_section
    @section = 'internship'
  end
      
  # GET /academic_contacts
  # GET /academic_contacts.xml
  def index
    @academic_contacts = AcademicContact.all

    respond_to do |format|
      format.html # index.html.erb
      format.json  { render :json => @academic_contacts }
      format.xml  { render :xml => @academic_contacts }
    end
  end

  # GET /academic_contacts/1
  # GET /academic_contacts/1.xml
  def show
    @academic_contact = AcademicContact.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json  { render :json => @academic_contact }
      format.xml  { render :xml => @academic_contact }
    end
  end

  # GET /academic_contacts/new
  # GET /academic_contacts/new.xml
  def new
    @academic_contact = AcademicContact.new

    respond_to do |format|
      format.html { 
        render :layout => 'layouts/dialog' if params[:dialog] == 'true'
      } # new.html.erb
      format.xml  { render :xml => @academic_contact }
    end
  end

  # GET /academic_contacts/1/edit
  def edit
    @academic_contact = AcademicContact.find(params[:id])
  end

  # POST /academic_contacts
  # POST /academic_contacts.xml
  def create
    @academic_contact = AcademicContact.new(params[:academic_contact])

    respond_to do |format|
      if @academic_contact.save
        format.html { redirect_to(@academic_contact, :notice => 'Academic contact was successfully created.') }
        format.xml  { render :xml => @academic_contact, :status => :created, :location => @academic_contact }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @academic_contact.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /academic_contacts/1
  # PUT /academic_contacts/1.xml
  def update
    @academic_contact = AcademicContact.find(params[:id])

    respond_to do |format|
      if @academic_contact.update_attributes(params[:academic_contact])
        format.html { redirect_to(@academic_contact, :notice => 'Academic contact was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @academic_contact.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /academic_contacts/1
  # DELETE /academic_contacts/1.xml
  def destroy
    @academic_contact = AcademicContact.find(params[:id])
    @academic_contact.destroy

    respond_to do |format|
      format.html { redirect_to(academic_contacts_url) }
      format.xml  { head :ok }
    end
  end
end
