# This migration comes from internships (originally 20110512174930)
class RenameStates < ActiveRecord::Migration
  def change
    rename_table :states, :internships_states
  end
end
