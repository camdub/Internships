# This migration comes from myguide (originally 20111032163306)
class RenameTasksUsersJoinTable < ActiveRecord::Migration
  def change
    rename_table :tasks_users, :myguide_tasks_users
  end
end
