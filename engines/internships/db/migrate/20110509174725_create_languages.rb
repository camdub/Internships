class CreateLanguages < ActiveRecord::Migration
  def change
    rename_table :languages, :internships_languages
  end
end
