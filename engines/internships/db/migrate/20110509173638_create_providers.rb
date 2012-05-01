class CreateProviders < ActiveRecord::Migration
  def change
    create_table :internships_providers do |t|
      t.string :name
      t.text :bio
      t.string :website
      t.boolean :agreement_on_file
      t.integer :provider_type_id
      t.text :notes

      t.timestamps
    end
  end
end
