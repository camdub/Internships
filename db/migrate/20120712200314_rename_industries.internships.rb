# This migration comes from internships (originally 20110512174606)
class RenameIndustries < ActiveRecord::Migration
  def change
    rename_table :industries, :internships_industries
  end
end
