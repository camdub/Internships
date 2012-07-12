# This migration comes from internships (originally 20110512172606)
class RenameInternships < ActiveRecord::Migration
  def change
    rename_table :internships, :internships_internships
  end
end
