# This migration comes from myguide (originally 20110805010356)
class RenameTasks < ActiveRecord::Migration
  def change
    rename_table :tasks, :myguide_tasks
  end
end
