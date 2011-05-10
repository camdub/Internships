class CreateStudentsAcademicFocusesJoinTable < ActiveRecord::Migration
  def self.up
    create_table :students_academic_focuses, :id => false do |t|
      t.integer :student_id
      t.integer :academic_focus_id
    end
  end

  def self.down
    drop_table :students_academic_focuses
  end
end
