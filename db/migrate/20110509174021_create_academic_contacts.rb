class CreateAcademicContacts < ActiveRecord::Migration
  def self.up
    create_table :academic_contacts do |t|
      t.string  :name
      t.string  :office_location
      t.string  :phone
      t.string  :email
      t.integer :department_id

      t.timestamps
    end
  end

  def self.down
    drop_table :academic_contacts
  end
end
