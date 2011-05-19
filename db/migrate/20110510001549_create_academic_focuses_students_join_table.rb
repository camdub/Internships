class CreateAcademicFocusesStudentsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :academic_focuses_students, :id => false do |t|
      t.integer :academic_focus_id
      t.integer :student_id
    end
  end

  def self.down
    drop_table :academic_focuses_students
  end
end
