class CreateFields < ActiveRecord::Migration
  def change
    rename_table :fields, :internships_fields
  end
end
