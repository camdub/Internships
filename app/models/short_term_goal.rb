class ShortTermGoal < ActiveRecord::Base
  has_and_belongs_to_many :long_term_goals
  has_and_belongs_to_many :tasks
  has_and_belongs_to_many :tags
  
  # TOKEN PROCESSING FOR AUTO-COMPLETE
  def set_long_term_goals=(ids)
    self.long_term_goal_ids = ids.split(",")
  end
  def set_tasks=(ids)
    self.task_ids = ids.split(",")
  end
  def set_tags=(ids)
    self.tag_ids = ids.split(",")
  end
  
end
