class CreateShortTermGoalsTasksJoinTable < ActiveRecord::Migration
  def self.up
    create_table :short_term_goals_tasks, :id => false do |t|
      t.integer :short_term_goal_id
      t.integer :task_id
    end
  end

  def self.down
    drop_table :short_term_goals_tasks
  end
end
