class RenameInternshipsSemestersJoinTable < ActiveRecord::Migration
  def change
    rename_table :internships_semesters, :internships_internships_semesters
  end
end
