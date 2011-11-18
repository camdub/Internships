# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20111118053112) do

  create_table "academic_contacts", :force => true do |t|
    t.string   "name"
    t.string   "office_location"
    t.string   "phone"
    t.string   "email"
    t.integer  "department_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "academic_focus_types", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "academic_focuses", :force => true do |t|
    t.string   "name"
    t.integer  "academic_focus_type_id"
    t.integer  "department_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "academic_focuses_internships", :id => false, :force => true do |t|
    t.integer "academic_focus_id"
    t.integer "internship_id"
  end

  create_table "academic_focuses_students", :id => false, :force => true do |t|
    t.integer "academic_focus_id"
    t.integer "student_id"
  end

  create_table "colleges", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "countries", :force => true do |t|
    t.string   "name"
    t.string   "un_code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "departments", :force => true do |t|
    t.string   "name"
    t.integer  "college_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "fields", :force => true do |t|
    t.string   "name"
    t.integer  "industry_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "fields_internships", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "field_id"
  end

  create_table "financial_assistance_option_types", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "financial_assistance_options", :force => true do |t|
    t.string   "name"
    t.integer  "financial_assistance_option_type_id"
    t.float    "how_much"
    t.text     "qualifications"
    t.string   "source"
    t.string   "website"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "financial_assistance_options_internships", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "financial_assistance_option_id"
  end

  create_table "industries", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "internship_instances", :force => true do |t|
    t.integer  "internship_id"
    t.integer  "student_id"
    t.text     "comments"
    t.decimal  "rating"
    t.boolean  "recommended"
    t.integer  "semester_id"
    t.boolean  "job_offered"
    t.boolean  "job_accepted"
    t.boolean  "can_contact"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "internships", :force => true do |t|
    t.string   "name"
    t.integer  "provider_id"
    t.boolean  "is_paid"
    t.boolean  "is_full_time"
    t.boolean  "is_part_time"
    t.float    "stipend"
    t.text     "description"
    t.text     "qualifications"
    t.text     "qualifications_academic"
    t.boolean  "for_credit"
    t.boolean  "requires_us_citizenship"
    t.integer  "academic_contact_id"
    t.integer  "provider_contact_id"
    t.text     "application_process"
    t.date     "deadline"
    t.text     "notes"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  create_table "internships_languages", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "language_id"
  end

  create_table "internships_locations", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "location_id"
  end

  create_table "internships_semesters", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "semester_id"
  end

  create_table "languages", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "locations", :force => true do |t|
    t.string   "city"
    t.integer  "state_id"
    t.integer  "country_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "long_term_goals", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  create_table "long_term_goals_short_term_goals", :id => false, :force => true do |t|
    t.integer "long_term_goal_id"
    t.integer "short_term_goal_id"
  end

  create_table "provider_contacts", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.string   "fax"
    t.boolean  "can_call"
    t.integer  "provider_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "provider_types", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "providers", :force => true do |t|
    t.string   "name"
    t.text     "bio"
    t.string   "website"
    t.boolean  "agreement_on_file"
    t.integer  "provider_type_id"
    t.text     "notes"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles_users", :id => false, :force => true do |t|
    t.integer "role_id"
    t.integer "user_id"
  end

  create_table "semesters", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "short_term_goals", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "school_year"
    t.integer  "tag_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  create_table "states", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "students", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.decimal  "gpa"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tags", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tasks", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "short_term_goal_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tasks_users", :id => false, :force => true do |t|
    t.integer "task_id"
    t.integer "user_id"
  end

  create_table "users", :force => true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "net_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
