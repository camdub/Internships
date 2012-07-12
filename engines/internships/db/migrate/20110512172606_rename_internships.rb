class RenameInternships < ActiveRecord::Migration
  def change
    rename_table :internships, :internships_internships
  end
end
