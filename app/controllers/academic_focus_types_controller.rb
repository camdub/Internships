class AcademicFocusTypesController < ApplicationController
  # GET /academic_focus_types
  # GET /academic_focus_types.xml
  def index
    @academic_focus_types = AcademicFocusType.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @academic_focus_types }
    end
  end

  # GET /academic_focus_types/1
  # GET /academic_focus_types/1.xml
  def show
    @academic_focus_type = AcademicFocusType.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @academic_focus_type }
    end
  end

  # GET /academic_focus_types/new
  # GET /academic_focus_types/new.xml
  def new
    @academic_focus_type = AcademicFocusType.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @academic_focus_type }
    end
  end

  # GET /academic_focus_types/1/edit
  def edit
    @academic_focus_type = AcademicFocusType.find(params[:id])
  end

  # POST /academic_focus_types
  # POST /academic_focus_types.xml
  def create
    @academic_focus_type = AcademicFocusType.new(params[:academic_focus_type])

    respond_to do |format|
      if @academic_focus_type.save
        format.html { redirect_to(@academic_focus_type, :notice => 'Academic focus type was successfully created.') }
        format.xml  { render :xml => @academic_focus_type, :status => :created, :location => @academic_focus_type }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @academic_focus_type.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /academic_focus_types/1
  # PUT /academic_focus_types/1.xml
  def update
    @academic_focus_type = AcademicFocusType.find(params[:id])

    respond_to do |format|
      if @academic_focus_type.update_attributes(params[:academic_focus_type])
        format.html { redirect_to(@academic_focus_type, :notice => 'Academic focus type was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @academic_focus_type.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /academic_focus_types/1
  # DELETE /academic_focus_types/1.xml
  def destroy
    @academic_focus_type = AcademicFocusType.find(params[:id])
    @academic_focus_type.destroy

    respond_to do |format|
      format.html { redirect_to(academic_focus_types_url) }
      format.xml  { head :ok }
    end
  end
end
