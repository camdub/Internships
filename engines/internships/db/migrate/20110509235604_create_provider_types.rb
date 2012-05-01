class CreateProviderTypes < ActiveRecord::Migration
  def change
    create_table :internships_provider_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
