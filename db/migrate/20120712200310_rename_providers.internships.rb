# This migration comes from internships (originally 20110512173638)
class RenameProviders < ActiveRecord::Migration
  def change
    rename_table :providers, :internships_providers
  end
end
