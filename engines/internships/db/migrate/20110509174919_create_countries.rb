class CreateCountries < ActiveRecord::Migration
  def change
    rename_table :countries, :internships_countries
  end
end
