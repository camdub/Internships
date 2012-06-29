class CreateIndustries < ActiveRecord::Migration
  def change
    rename_table :internship_industries, :internships_industries
  end
end
