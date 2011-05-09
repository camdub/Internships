class ProviderContactsController < ApplicationController
  # GET /provider_contacts
  # GET /provider_contacts.xml
  def index
    @provider_contacts = ProviderContact.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @provider_contacts }
    end
  end

  # GET /provider_contacts/1
  # GET /provider_contacts/1.xml
  def show
    @provider_contact = ProviderContact.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @provider_contact }
    end
  end

  # GET /provider_contacts/new
  # GET /provider_contacts/new.xml
  def new
    @provider_contact = ProviderContact.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @provider_contact }
    end
  end

  # GET /provider_contacts/1/edit
  def edit
    @provider_contact = ProviderContact.find(params[:id])
  end

  # POST /provider_contacts
  # POST /provider_contacts.xml
  def create
    @provider_contact = ProviderContact.new(params[:provider_contact])

    respond_to do |format|
      if @provider_contact.save
        format.html { redirect_to(@provider_contact, :notice => 'Provider contact was successfully created.') }
        format.xml  { render :xml => @provider_contact, :status => :created, :location => @provider_contact }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @provider_contact.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /provider_contacts/1
  # PUT /provider_contacts/1.xml
  def update
    @provider_contact = ProviderContact.find(params[:id])

    respond_to do |format|
      if @provider_contact.update_attributes(params[:provider_contact])
        format.html { redirect_to(@provider_contact, :notice => 'Provider contact was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @provider_contact.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /provider_contacts/1
  # DELETE /provider_contacts/1.xml
  def destroy
    @provider_contact = ProviderContact.find(params[:id])
    @provider_contact.destroy

    respond_to do |format|
      format.html { redirect_to(provider_contacts_url) }
      format.xml  { head :ok }
    end
  end
end
