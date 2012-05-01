class CreateAcademicFocusesInternshipsJoinTable < ActiveRecord::Migration
  def change
    create_table :internships_academic_focuses_internships, :id => false do |t|
      t.integer :academic_focus_id
      t.integer :internship_id
    end
  end
end
