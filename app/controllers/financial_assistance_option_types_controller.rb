class FinancialAssistanceOptionTypesController < ApplicationController
  # GET /financial_assistance_option_types
  # GET /financial_assistance_option_types.xml
  def index
    @financial_assistance_option_types = FinancialAssistanceOptionType.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @financial_assistance_option_types }
    end
  end

  # GET /financial_assistance_option_types/1
  # GET /financial_assistance_option_types/1.xml
  def show
    @financial_assistance_option_type = FinancialAssistanceOptionType.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @financial_assistance_option_type }
    end
  end

  # GET /financial_assistance_option_types/new
  # GET /financial_assistance_option_types/new.xml
  def new
    @financial_assistance_option_type = FinancialAssistanceOptionType.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @financial_assistance_option_type }
    end
  end

  # GET /financial_assistance_option_types/1/edit
  def edit
    @financial_assistance_option_type = FinancialAssistanceOptionType.find(params[:id])
  end

  # POST /financial_assistance_option_types
  # POST /financial_assistance_option_types.xml
  def create
    @financial_assistance_option_type = FinancialAssistanceOptionType.new(params[:financial_assistance_option_type])

    respond_to do |format|
      if @financial_assistance_option_type.save
        format.html { redirect_to(@financial_assistance_option_type, :notice => 'Financial assistance option type was successfully created.') }
        format.xml  { render :xml => @financial_assistance_option_type, :status => :created, :location => @financial_assistance_option_type }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @financial_assistance_option_type.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /financial_assistance_option_types/1
  # PUT /financial_assistance_option_types/1.xml
  def update
    @financial_assistance_option_type = FinancialAssistanceOptionType.find(params[:id])

    respond_to do |format|
      if @financial_assistance_option_type.update_attributes(params[:financial_assistance_option_type])
        format.html { redirect_to(@financial_assistance_option_type, :notice => 'Financial assistance option type was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @financial_assistance_option_type.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /financial_assistance_option_types/1
  # DELETE /financial_assistance_option_types/1.xml
  def destroy
    @financial_assistance_option_type = FinancialAssistanceOptionType.find(params[:id])
    @financial_assistance_option_type.destroy

    respond_to do |format|
      format.html { redirect_to(financial_assistance_option_types_url) }
      format.xml  { head :ok }
    end
  end
end
