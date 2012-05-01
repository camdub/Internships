class CreateDepartments < ActiveRecord::Migration
  def change
    create_table :internships_departments do |t|
      t.string :name
      t.integer :college_id

      t.timestamps
    end
  end
end
