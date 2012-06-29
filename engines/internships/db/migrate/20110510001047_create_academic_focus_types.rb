class CreateAcademicFocusTypes < ActiveRecord::Migration
  def change
    rename_table :academic_focus_types, :internships_academic_focus_types
  end
end
