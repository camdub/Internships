class CreateLongTermGoalsShortTermGoalsJoinTable < ActiveRecord::Migration
  def change
    create_table :myguide_long_term_goals_short_term_goals, :id => false do |t|
      t.integer :long_term_goal_id
      t.integer :short_term_goal_id
    end
  end
end
