class CreateTasksUsersJoinTable < ActiveRecord::Migration
  def change
    create_table :myguide_tasks_users, :id => false do |t|
      t.integer :task_id
      t.integer :user_id
    end
  end
end
