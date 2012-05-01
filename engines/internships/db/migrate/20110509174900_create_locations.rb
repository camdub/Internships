class CreateLocations < ActiveRecord::Migration
  def change
    create_table :internships_locations do |t|
      t.string :city
      t.integer :state_id
      t.integer :country_id

      t.timestamps
    end
  end
end
