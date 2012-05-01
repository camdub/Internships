class CreateInternshipInstances < ActiveRecord::Migration
  def change
    create_table :internships_internship_instances do |t|
      t.integer :internship_id
      t.integer :student_id
      t.text :comments
      t.decimal :rating
      t.boolean :recommended
      t.integer :semester_id
      t.boolean :job_offered
      t.boolean :job_accepted
      t.boolean :can_contact

      t.timestamps
    end
  end
end
