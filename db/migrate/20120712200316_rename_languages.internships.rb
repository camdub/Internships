# This migration comes from internships (originally 20110512174725)
class RenameLanguages < ActiveRecord::Migration
  def change
    rename_table :languages, :internships_languages
  end
end
