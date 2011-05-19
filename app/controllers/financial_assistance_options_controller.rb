class FinancialAssistanceOptionsController < ApplicationController
  # GET /financial_assistance_options
  # GET /financial_assistance_options.xml
  def index
    @financial_assistance_options = FinancialAssistanceOption.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @financial_assistance_options }
    end
  end

  # GET /financial_assistance_options/1
  # GET /financial_assistance_options/1.xml
  def show
    @financial_assistance_option = FinancialAssistanceOption.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @financial_assistance_option }
    end
  end

  # GET /financial_assistance_options/new
  # GET /financial_assistance_options/new.xml
  def new
    @financial_assistance_option = FinancialAssistanceOption.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @financial_assistance_option }
    end
  end

  # GET /financial_assistance_options/1/edit
  def edit
    @financial_assistance_option = FinancialAssistanceOption.find(params[:id])
  end

  # POST /financial_assistance_options
  # POST /financial_assistance_options.xml
  def create
    @financial_assistance_option = FinancialAssistanceOption.new(params[:financial_assistance_option])

    respond_to do |format|
      if @financial_assistance_option.save
        format.html { redirect_to(@financial_assistance_option, :notice => 'Financial assistance option was successfully created.') }
        format.xml  { render :xml => @financial_assistance_option, :status => :created, :location => @financial_assistance_option }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @financial_assistance_option.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /financial_assistance_options/1
  # PUT /financial_assistance_options/1.xml
  def update
    @financial_assistance_option = FinancialAssistanceOption.find(params[:id])

    respond_to do |format|
      if @financial_assistance_option.update_attributes(params[:financial_assistance_option])
        format.html { redirect_to(@financial_assistance_option, :notice => 'Financial assistance option was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @financial_assistance_option.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /financial_assistance_options/1
  # DELETE /financial_assistance_options/1.xml
  def destroy
    @financial_assistance_option = FinancialAssistanceOption.find(params[:id])
    @financial_assistance_option.destroy

    respond_to do |format|
      format.html { redirect_to(financial_assistance_options_url) }
      format.xml  { head :ok }
    end
  end
end
