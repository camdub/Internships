class CreateInternshipsLanguagesJoinTable < ActiveRecord::Migration
  def self.up
    create_table :internships_languages, :id => false do |t|
      t.integer :internship_id
      t.integer :language_id
    end
  end

  def self.down
    drop_table :internships_languages
  end
end