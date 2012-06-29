class CreateShortTermGoals < ActiveRecord::Migration
  def self.up
    create_table :short_term_goals do |t|
      t.string :name
      t.text :description
      t.integer :school_year
      t.integer :tag_id

      t.timestamps
    end
  end

  def self.down
    drop_table :short_term_goals
  end
end
