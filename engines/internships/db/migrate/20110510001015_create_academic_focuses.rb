class CreateAcademicFocuses < ActiveRecord::Migration
  def change
    rename_table :academic_focuses, :internships_academic_focuses
  end
end
