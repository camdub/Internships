class CreateProviders < ActiveRecord::Migration
  def change
    rename_table :providers, :internships_providers
  end
end
