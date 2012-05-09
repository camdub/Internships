class CreateLongTermGoals < ActiveRecord::Migration
  def change
    create_table :myguide_long_term_goals do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
