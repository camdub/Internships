# This migration comes from internships (originally 20110512174919)
class RenameCountries < ActiveRecord::Migration
  def change
    rename_table :countries, :internships_countries
  end
end
