class RenameInternshipInstances < ActiveRecord::Migration
  def change
    rename_table :internship_instances, :internships_internship_instances
  end
end
