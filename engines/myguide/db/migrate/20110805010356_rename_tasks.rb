class RenameTasks < ActiveRecord::Migration
  def change
    rename_table :tasks, :myguide_tasks
  end
end
