class RenameAcademicFocusesInternshipsJoinTable < ActiveRecord::Migration
  def change
    rename_table :academic_focuses_internships, :internships_academic_focuses_internships
  end
end
