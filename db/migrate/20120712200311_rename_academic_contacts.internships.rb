# This migration comes from internships (originally 20110512174021)
class RenameAcademicContacts < ActiveRecord::Migration
  def change
    rename_table :academic_contacts, :internships_academic_contacts
  end
end
