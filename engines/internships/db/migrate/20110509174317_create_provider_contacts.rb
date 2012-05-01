class CreateProviderContacts < ActiveRecord::Migration
  def change
    create_table :internships_provider_contacts do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :fax
      t.boolean :can_call
      t.integer :provider_id

      t.timestamps
    end
  end
end
