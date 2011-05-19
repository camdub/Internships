class CreateInternshipsLocationsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :internships_locations, :id => false do |t|
      t.integer :internship_id
      t.integer :location_id
    end
  end

  def self.down
    drop_table :internships_locations
  end
end
