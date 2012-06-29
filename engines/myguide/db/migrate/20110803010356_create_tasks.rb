class CreateTasks < ActiveRecord::Migration
  def change
    rename_table :tasks, :myguide_tasks
  end
end
