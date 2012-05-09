module Myguide
  class LongTermGoal < ActiveRecord::Base
    has_and_belongs_to_many :short_term_goals, :join_table => 'myguide_long_term_goals_short_term_goals'
    belongs_to :user
  end
end