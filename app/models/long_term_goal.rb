class LongTermGoal < ActiveRecord::Base
  has_many :short_term_goals
end
