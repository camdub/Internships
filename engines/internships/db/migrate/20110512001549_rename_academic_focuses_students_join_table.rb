class RenameAcademicFocusesStudentsJoinTable < ActiveRecord::Migration
  def change
    rename_table :academic_focuses_students, :internships_academic_focuses_students
  end
end
