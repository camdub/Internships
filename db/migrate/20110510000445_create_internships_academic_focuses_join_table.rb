class CreateInternshipsAcademicFocusesJoinTable < ActiveRecord::Migration
  def self.up
    create_table :internships_academic_focuses, :id => false do |t|
      t.integer :internship_id
      t.integer :academic_focus_id
    end
  end

  def self.down
    drop_table :internships_academic_focuses
  end
end
