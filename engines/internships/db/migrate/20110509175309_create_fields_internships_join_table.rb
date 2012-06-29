class CreateFieldsInternshipsJoinTable < ActiveRecord::Migration
  def change
    rename_table :fields_internships, :internships_fields_internships
  end
end
