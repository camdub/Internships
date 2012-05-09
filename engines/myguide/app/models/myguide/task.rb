module Myguide
  class Task < ActiveRecord::Base
    belongs_to :short_term_goal
    has_and_belongs_to_many :users, :join_table => 'myguide_tasks_users'
  end
end