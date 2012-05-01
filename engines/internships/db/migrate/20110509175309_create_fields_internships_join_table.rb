class CreateFieldsInternshipsJoinTable < ActiveRecord::Migration
  def change
    create_table :internships_fields_internships, :id => false do |t|
      t.integer :internship_id
      t.integer :field_id
    end
  end
end
