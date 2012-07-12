# This migration comes from internships (originally 20110512001047)
class RenameAcademicFocusTypes < ActiveRecord::Migration
  def change
    rename_table :academic_focus_types, :internships_academic_focus_types
  end
end
