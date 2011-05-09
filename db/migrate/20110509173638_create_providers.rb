class CreateProviders < ActiveRecord::Migration
  def self.up
    create_table :providers do |t|
      t.string :name
      t.text :bio
      t.string :website
      t.boolean :agreement_on_file
      t.string :type
      t.text :notes

      t.timestamps
    end
  end

  def self.down
    drop_table :providers
  end
end
