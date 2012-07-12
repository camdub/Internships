# This migration comes from internships (originally 20110512174710)
class RenameFields < ActiveRecord::Migration
  def change
    rename_table :fields, :internships_fields
  end
end
