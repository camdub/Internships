class CreateInternshipsLanguagesJoinTable < ActiveRecord::Migration
  def change
    rename_table :internships_languages, :internships_internships_languages
  end
end