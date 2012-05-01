class CreateInternshipsLocationsJoinTable < ActiveRecord::Migration
  def change
    create_table :internships_internships_locations, :id => false do |t|
      t.integer :internship_id
      t.integer :location_id
    end
  end
end
