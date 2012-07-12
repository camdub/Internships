# This migration comes from internships (originally 20110512184219)
class RenameInternshipsLanguagesJoinTable < ActiveRecord::Migration
  def change
    rename_table :internships_languages, :internships_internships_languages
  end
end