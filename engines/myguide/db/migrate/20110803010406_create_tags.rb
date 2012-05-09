class CreateTags < ActiveRecord::Migration
  def change
    create_table :myguide_tags do |t|
      t.string :name

      t.timestamps
    end
  end
end
