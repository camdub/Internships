# This migration comes from internships (originally 20110512001142)
class RenameDepartments < ActiveRecord::Migration
  def change
    rename_table :departments, :internships_departments
  end
end
