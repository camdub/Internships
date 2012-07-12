# This migration comes from internships (originally 20110512174317)
class RenameProviderContacts < ActiveRecord::Migration
  def change
    rename_table :provider_contacts, :internships_provider_contacts
  end
end
