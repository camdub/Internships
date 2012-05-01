class CreateInternships < ActiveRecord::Migration
  def change
    create_table :internships_internships do |t|
      t.string  :name
      t.integer :provider_id
      t.boolean :is_paid
      t.boolean :is_full_time
      t.boolean :is_part_time
      t.text    :stipend
      t.text    :description
      t.text    :qualifications
      t.text    :qualifications_academic
      t.boolean :for_credit
      t.boolean :requires_us_citizenship
      t.integer :academic_contact_id
      t.integer :provider_contact_id
      t.text    :application_process
      t.string  :deadline
      t.text    :notes

      t.timestamps
    end
  end
end
