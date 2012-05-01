class CreateAcademicFocusesStudentsJoinTable < ActiveRecord::Migration
  def change
    create_table :internships_academic_focuses_students, :id => false do |t|
      t.integer :academic_focus_id
      t.integer :student_id
    end
  end
end
