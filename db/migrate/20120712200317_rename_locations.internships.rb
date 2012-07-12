# This migration comes from internships (originally 20110512174900)
class RenameLocations < ActiveRecord::Migration
  def change
    rename_table :locations, :internships_locations
  end
end
