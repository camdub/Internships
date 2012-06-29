class CreateProviderContacts < ActiveRecord::Migration
  def change
    rename_table :provider_contacts, :internships_provider_contacts
  end
end
