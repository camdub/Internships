class CreateDepartments < ActiveRecord::Migration
  def change
    rename_table :departments, :internships_departments
  end
end
