class CreateInternshipsSemestersJoinTable < ActiveRecord::Migration
  def self.up
    create_table :internships_semesters, :id => false do |t|
      t.integer :internship_id
      t.integer :semester_id
    end
  end

  def self.down
    drop_table :internships_semesters
  end
end
