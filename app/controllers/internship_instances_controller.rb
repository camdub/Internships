class InternshipInstancesController < ApplicationController

  before_filter :set_section  
    
  def set_section
    @section = 'internship'
  end
      
  # GET /internship_instances
  # GET /internship_instances.xml
  def index
    @internship_instances = InternshipInstance.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @internship_instances }
    end
  end

  # GET /internship_instances/1
  # GET /internship_instances/1.xml
  def show
    @internship_instance = InternshipInstance.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @internship_instance }
    end
  end

  # GET /internship_instances/new
  # GET /internship_instances/new.xml
  def new
    @internship_instance = InternshipInstance.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @internship_instance }
    end
  end

  # GET /internship_instances/1/edit
  def edit
    @internship_instance = InternshipInstance.find(params[:id])
  end

  # POST /internship_instances
  # POST /internship_instances.xml
  def create
    @internship_instance = InternshipInstance.new(params[:internship_instance])

    respond_to do |format|
      if @internship_instance.save
        format.html { redirect_to(@internship_instance, :notice => 'Internship instance was successfully created.') }
        format.xml  { render :xml => @internship_instance, :status => :created, :location => @internship_instance }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @internship_instance.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /internship_instances/1
  # PUT /internship_instances/1.xml
  def update
    @internship_instance = InternshipInstance.find(params[:id])

    respond_to do |format|
      if @internship_instance.update_attributes(params[:internship_instance])
        format.html { redirect_to(@internship_instance, :notice => 'Internship instance was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @internship_instance.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /internship_instances/1
  # DELETE /internship_instances/1.xml
  def destroy
    @internship_instance = InternshipInstance.find(params[:id])
    @internship_instance.destroy

    respond_to do |format|
      format.html { redirect_to(internship_instances_url) }
      format.xml  { head :ok }
    end
  end
end
