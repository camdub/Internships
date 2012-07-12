# This migration comes from internships (originally 20110512175123)
class RenameSemesters < ActiveRecord::Migration
  def change
    rename_table :semesters, :internships_semesters
  end
end
