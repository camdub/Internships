class ShortTermGoal < ActiveRecord::Base
  belongs_to :long_term_goals
  has_many :tasks
  has_many :tags
end
