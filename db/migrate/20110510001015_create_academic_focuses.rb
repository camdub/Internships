class CreateAcademicFocuses < ActiveRecord::Migration
  def self.up
    create_table :academic_focuses do |t|
      t.string :name
      t.integer :academic_focus_type_id
      t.integer :department_id

      t.timestamps
    end
  end

  def self.down
    drop_table :academic_focuses
  end
end
