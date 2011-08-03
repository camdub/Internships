class ShortTermGoalsController < ApplicationController
  
  before_filter :set_section  
    
  def set_section
    @section = 'myguide'
  end
      
  # GET /short_term_goals
  # GET /short_term_goals.xml
  def index
    @short_term_goals = ShortTermGoal.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @short_term_goals }
    end
  end

  # GET /short_term_goals/1
  # GET /short_term_goals/1.xml
  def show
    @short_term_goal = ShortTermGoal.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @short_term_goal }
    end
  end

  # GET /short_term_goals/new
  # GET /short_term_goals/new.xml
  def new
    @short_term_goal = ShortTermGoal.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @short_term_goal }
    end
  end

  # GET /short_term_goals/1/edit
  def edit
    @short_term_goal = ShortTermGoal.find(params[:id])
  end

  # POST /short_term_goals
  # POST /short_term_goals.xml
  def create
    @short_term_goal = ShortTermGoal.new(params[:short_term_goal])

    respond_to do |format|
      if @short_term_goal.save
        format.html { redirect_to(@short_term_goal, :notice => 'Short term goal was successfully created.') }
        format.xml  { render :xml => @short_term_goal, :status => :created, :location => @short_term_goal }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @short_term_goal.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /short_term_goals/1
  # PUT /short_term_goals/1.xml
  def update
    @short_term_goal = ShortTermGoal.find(params[:id])

    respond_to do |format|
      if @short_term_goal.update_attributes(params[:short_term_goal])
        format.html { redirect_to(@short_term_goal, :notice => 'Short term goal was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @short_term_goal.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /short_term_goals/1
  # DELETE /short_term_goals/1.xml
  def destroy
    @short_term_goal = ShortTermGoal.find(params[:id])
    @short_term_goal.destroy

    respond_to do |format|
      format.html { redirect_to(short_term_goals_url) }
      format.xml  { head :ok }
    end
  end
end
