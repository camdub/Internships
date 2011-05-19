class CreateAcademicFocusesInternshipsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :academic_focuses_internships, :id => false do |t|
      t.integer :academic_focus_id
      t.integer :internship_id
    end
  end

  def self.down
    drop_table :academic_focuses_internships
  end
end
