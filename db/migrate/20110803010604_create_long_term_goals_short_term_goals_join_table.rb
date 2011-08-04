class CreateLongTermGoalsShortTermGoalsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :long_term_goals_short_term_goals, :id => false do |t|
      t.integer :long_term_goal_id
      t.integer :short_term_goal_id
    end
  end

  def self.down
    drop_table :long_term_goals_short_term_goals
  end
end
