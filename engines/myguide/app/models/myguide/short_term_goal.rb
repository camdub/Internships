module Myguide
  class ShortTermGoal < ActiveRecord::Base
    has_and_belongs_to_many :long_term_goals, :join_table => 'myguide_long_term_goals_short_term_goals'
    has_many :tasks
    belongs_to :tag
    belongs_to :user
  
    accepts_nested_attributes_for :tasks, :reject_if => lambda { |a| a[:name].blank? }, :allow_destroy => true
  
    def display_long_term_goals
      self.long_term_goals.select(:name).map{|obj| obj.name}.join(',')
    end
    # TOKEN PROCESSING FOR AUTO-COMPLETE
  =begin
    def set_long_term_goals=(ids)
      self.long_term_goal_ids = ids.split(",")
    end
    def set_tasks=(ids)
      self.task_ids = ids.split(",")
    end
    def set_tags=(ids)
      self.tag_ids = ids.split(",")
    end
  =end  
  end
end