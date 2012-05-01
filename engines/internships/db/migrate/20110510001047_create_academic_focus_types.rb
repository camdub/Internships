class CreateAcademicFocusTypes < ActiveRecord::Migration
  def change
    create_table :internships_academic_focus_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
