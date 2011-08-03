class CreateLongTermGoals < ActiveRecord::Migration
  def self.up
    create_table :long_term_goals do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :long_term_goals
  end
end
