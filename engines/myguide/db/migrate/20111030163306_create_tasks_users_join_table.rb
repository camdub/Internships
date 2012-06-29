class CreateTasksUsersJoinTable < ActiveRecord::Migration
  def change
    rename_table :tasks_users, :myguide_tasks_users
  end
end
