class RenameIndustries < ActiveRecord::Migration
  def change
    rename_table :industries, :internships_industries
  end
end
