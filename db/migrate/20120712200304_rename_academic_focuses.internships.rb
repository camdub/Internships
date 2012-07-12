# This migration comes from internships (originally 20110512001015)
class RenameAcademicFocuses < ActiveRecord::Migration
  def change
    rename_table :academic_focuses, :internships_academic_focuses
  end
end
