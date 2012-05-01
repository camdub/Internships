class CreateSemesters < ActiveRecord::Migration
  def change
    create_table :internships_semesters do |t|
      t.string :name

      t.timestamps
    end
  end
end
