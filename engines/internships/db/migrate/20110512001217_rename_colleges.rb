class RenameColleges < ActiveRecord::Migration
  def change
    rename_table :colleges, :internships_colleges
  end
end
