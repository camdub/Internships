class CreateLanguages < ActiveRecord::Migration
  def change
    create_table :internships_languages do |t|
      t.string :name

      t.timestamps
    end
  end
end
