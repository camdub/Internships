module Myguide
  class LongTermGoalsController < ApplicationController
  
    before_filter :set_section  
    
    def set_section
      @section = 'myguide'
    end
      
    # GET /long_term_goals
    # GET /long_term_goals.xml
    def index
      @long_term_goals = LongTermGoal.all

      respond_to do |format|
        format.html # index.html.erb
        format.xml  { render :xml => @long_term_goals }
      end
    end

    # GET /long_term_goals/1
    # GET /long_term_goals/1.xml
    def show
      @long_term_goal = LongTermGoal.find(params[:id])

      respond_to do |format|
        format.html # show.html.erb
        format.xml  { render :xml => @long_term_goal }
      end
    end

    # GET /long_term_goals/new
    # GET /long_term_goals/new.xml
    def new
      @long_term_goal = LongTermGoal.new

      @long_term_goal.user = @current_user if @long_term_goal.user == nil

      respond_to do |format|
        format.html # new.html.erb
        format.xml  { render :xml => @long_term_goal }
      end
    end

    # GET /long_term_goals/1/edit
    def edit
      @long_term_goal = LongTermGoal.find(params[:id])
    end

    # POST /long_term_goals
    # POST /long_term_goals.xml
    def create
      @long_term_goal = LongTermGoal.new(params[:long_term_goal])

      respond_to do |format|
        if @long_term_goal.save
          format.html { redirect_to(@long_term_goal, :notice => 'Long term goal was successfully created.') }
          format.xml  { render :xml => @long_term_goal, :status => :created, :location => @long_term_goal }
        else
          format.html { render :action => "new" }
          format.xml  { render :xml => @long_term_goal.errors, :status => :unprocessable_entity }
        end
      end
    end

    # PUT /long_term_goals/1
    # PUT /long_term_goals/1.xml
    def update
      @long_term_goal = LongTermGoal.find(params[:id])

      respond_to do |format|
        if @long_term_goal.update_attributes(params[:long_term_goal])
          format.html { redirect_to(@long_term_goal, :notice => 'Long term goal was successfully updated.') }
          format.xml  { head :ok }
        else
          format.html { render :action => "edit" }
          format.xml  { render :xml => @long_term_goal.errors, :status => :unprocessable_entity }
        end
      end
    end

    # DELETE /long_term_goals/1
    # DELETE /long_term_goals/1.xml
    def destroy
      @long_term_goal = LongTermGoal.find(params[:id])
      @long_term_goal.destroy

      respond_to do |format|
        format.html { redirect_to(long_term_goals_url) }
        format.xml  { head :ok }
      end
    end
  end
end