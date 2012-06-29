class CreateProviderContacts < ActiveRecord::Migration
  def self.up
    create_table :provider_contacts do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :fax
      t.boolean :can_call
      t.integer :provider_id

      t.timestamps
    end
  end

  def self.down
    drop_table :provider_contacts
  end
end
