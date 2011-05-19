class CreateInternships < ActiveRecord::Migration
  def self.up
    create_table :internships do |t|
      t.string  :name
      t.integer :provider_id
      t.boolean :is_paid
      t.boolean :is_full_time
      t.boolean :is_part_time
      t.float   :stipend
      t.text    :description
      t.text    :qualifications
      t.text    :qualifications_academic
      t.boolean :for_credit
      t.boolean :requires_us_citizenship
      t.integer :academic_contact_id
      t.integer :provider_contact_id
      t.text    :application_process
      t.date    :deadline
      t.text    :notes

      t.timestamps
    end
  end

  def self.down
    drop_table :internships
  end
end
