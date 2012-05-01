class CreateCountries < ActiveRecord::Migration
  def change
    create_table :internships_countries do |t|
      t.string :name
      t.string :un_code

      t.timestamps
    end
  end
end
