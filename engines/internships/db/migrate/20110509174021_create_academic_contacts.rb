class CreateAcademicContacts < ActiveRecord::Migration
  def change
    create_table :internships_academic_contacts do |t|
      t.string  :name
      t.string  :office_location
      t.string  :phone
      t.string  :email
      t.integer :department_id

      t.timestamps
    end
  end
end
