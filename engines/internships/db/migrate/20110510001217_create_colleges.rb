class CreateColleges < ActiveRecord::Migration
  def change
    create_table :internships_colleges do |t|
      t.string :name

      t.timestamps
    end
  end
end
