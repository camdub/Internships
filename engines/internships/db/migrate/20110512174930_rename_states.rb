class RenameStates < ActiveRecord::Migration
  def change
    rename_table :states, :internships_states
  end
end
