class CreateAcademicFocuses < ActiveRecord::Migration
  def change
    create_table :internships_academic_focuses do |t|
      t.string :name
      t.integer :academic_focus_type_id
      t.integer :department_id

      t.timestamps
    end
  end
end
