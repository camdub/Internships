class CreateTasks < ActiveRecord::Migration
  def change
    create_table :myguide_tasks do |t|
      t.string :name
      t.text :description
      t.integer :short_term_goal_id

      t.timestamps
    end
  end
end
