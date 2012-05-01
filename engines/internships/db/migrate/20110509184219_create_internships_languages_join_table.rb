class CreateInternshipsLanguagesJoinTable < ActiveRecord::Migration
  def change
    create_table :internships_internships_languages, :id => false do |t|
      t.integer :internship_id
      t.integer :language_id
    end
  end
end