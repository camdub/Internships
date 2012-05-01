class CreateStates < ActiveRecord::Migration
  def change
    create_table :internships_states do |t|
      t.string :name

      t.timestamps
    end
  end
end
