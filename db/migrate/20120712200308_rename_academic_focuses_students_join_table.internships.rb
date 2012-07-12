# This migration comes from internships (originally 20110512001549)
class RenameAcademicFocusesStudentsJoinTable < ActiveRecord::Migration
  def change
    rename_table :academic_focuses_students, :internships_academic_focuses_students
  end
end
