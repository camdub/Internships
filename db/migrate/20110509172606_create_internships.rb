class CreateInternships < ActiveRecord::Migration
  def self.up
    create_table :internships do |t|
      t.string  :name
      t.integer :provider_id
      t.boolean :paid
      t.boolean :full_time
      t.boolean :part_time
      t.float   :stipend
      t.text    :description
      t.text    :qualifications
      t.text    :qualifications_academic
      t.boolean :credit
      t.boolean :citizenship
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
