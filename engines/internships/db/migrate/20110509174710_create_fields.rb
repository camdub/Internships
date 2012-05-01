class CreateFields < ActiveRecord::Migration
  def change
    create_table :internships_fields do |t|
      t.string :name
      t.integer :industry_id

      t.timestamps
    end
  end
end
