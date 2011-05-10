class CreateAcademicFocusTypes < ActiveRecord::Migration
  def self.up
    create_table :academic_focus_types do |t|
      t.string :name

      t.timestamps
    end
  end

  def self.down
    drop_table :academic_focus_types
  end
end
