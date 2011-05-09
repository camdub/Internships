class CreateInternshipsFieldsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :internships_fields, :id => false do |t|
      t.integer :internship_id
      t.integer :field_id
    end
  end

  def self.down
    drop_table :internships_fields
  end
end
