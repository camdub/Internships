class CreateShortTermGoals < ActiveRecord::Migration
  def change
    create_table :myguide_short_term_goals do |t|
      t.string :name
      t.text :description
      t.integer :school_year
      t.integer :tag_id

      t.timestamps
    end
  end
end
