# This migration comes from internships (originally 20110512175309)
class RenameFieldsInternshipsJoinTable < ActiveRecord::Migration
  def change
    rename_table :fields_internships, :internships_fields_internships
  end
end
