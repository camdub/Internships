class RenameProviderTypes < ActiveRecord::Migration
  def change
    rename_table :provider_types, :internships_provider_types
  end
end
