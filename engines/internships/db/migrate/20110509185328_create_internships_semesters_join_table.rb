class CreateInternshipsSemestersJoinTable < ActiveRecord::Migration
  def change
    create_table :internships_internships_semesters, :id => false do |t|
      t.integer :internship_id
      t.integer :semester_id
    end
  end
end
