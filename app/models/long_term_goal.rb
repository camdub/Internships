class LongTermGoal < ActiveRecord::Base
  has_and_belongs_to_many :short_term_goals
  belongs_to :user
end
