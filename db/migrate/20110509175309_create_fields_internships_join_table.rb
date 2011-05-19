class CreateFieldsInternshipsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :fields_internships, :id => false do |t|
      t.integer :internship_id
      t.integer :field_id
    end
  end

  def self.down
    drop_table :fields_internships
  end
end
