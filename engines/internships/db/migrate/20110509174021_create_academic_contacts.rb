class CreateAcademicContacts < ActiveRecord::Migration
  def change
    rename_table :academic_contacts, :internships_academic_contacts
  end
end
