class CreateIndustries < ActiveRecord::Migration
  def change
    create_table :internships_industries do |t|
      t.string :name

      t.timestamps
    end
  end
end
