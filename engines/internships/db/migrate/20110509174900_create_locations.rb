class CreateLocations < ActiveRecord::Migration
  def change
    rename_table :locations, :internships_locations
  end
end
