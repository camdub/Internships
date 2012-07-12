# This migration comes from internships (originally 20110512235604)
class RenameProviderTypes < ActiveRecord::Migration
  def change
    rename_table :provider_types, :internships_provider_types
  end
end
