class CreateSemesters < ActiveRecord::Migration
  def change
    rename_table :semesters, :internships_semesters
  end
end
