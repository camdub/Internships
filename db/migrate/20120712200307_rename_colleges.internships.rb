# This migration comes from internships (originally 20110512001217)
class RenameColleges < ActiveRecord::Migration
  def change
    rename_table :colleges, :internships_colleges
  end
end
