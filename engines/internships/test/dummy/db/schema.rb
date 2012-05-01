# encoding: UTF-8
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

ActiveRecord::Schema.define(:version => 20111104185219) do

  create_table "internships_academic_contacts", :force => true do |t|
    t.string   "name"
    t.string   "office_location"
    t.string   "phone"
    t.string   "email"
    t.integer  "department_id"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "internships_academic_focus_types", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_academic_focuses", :force => true do |t|
    t.string   "name"
    t.integer  "academic_focus_type_id"
    t.integer  "department_id"
    t.datetime "created_at",             :null => false
    t.datetime "updated_at",             :null => false
  end

  create_table "internships_academic_focuses_internships", :id => false, :force => true do |t|
    t.integer "academic_focus_id"
    t.integer "internship_id"
  end

  create_table "internships_academic_focuses_students", :id => false, :force => true do |t|
    t.integer "academic_focus_id"
    t.integer "student_id"
  end

  create_table "internships_colleges", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_countries", :force => true do |t|
    t.string   "name"
    t.string   "un_code"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_departments", :force => true do |t|
    t.string   "name"
    t.integer  "college_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_fields", :force => true do |t|
    t.string   "name"
    t.integer  "industry_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "internships_fields_internships", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "field_id"
  end

  create_table "internships_financial_assistance_option_types", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_financial_assistance_options", :force => true do |t|
    t.string   "name"
    t.integer  "financial_assistance_option_type_id"
    t.integer  "how_much"
    t.text     "qualifications"
    t.string   "source"
    t.string   "website"
    t.datetime "created_at",                          :null => false
    t.datetime "updated_at",                          :null => false
  end

  create_table "internships_financial_assistance_options_internships", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "financial_assistance_option_id"
  end

  create_table "internships_industries", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_internship_instances", :force => true do |t|
    t.integer  "internship_id"
    t.integer  "student_id"
    t.text     "comments"
    t.decimal  "rating"
    t.boolean  "recommended"
    t.integer  "semester_id"
    t.boolean  "job_offered"
    t.boolean  "job_accepted"
    t.boolean  "can_contact"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "internships_internships", :force => true do |t|
    t.string   "name"
    t.integer  "provider_id"
    t.boolean  "is_paid"
    t.boolean  "is_full_time"
    t.boolean  "is_part_time"
    t.text     "stipend"
    t.text     "description"
    t.text     "qualifications"
    t.text     "qualifications_academic"
    t.boolean  "for_credit"
    t.boolean  "requires_us_citizenship"
    t.integer  "academic_contact_id"
    t.integer  "provider_contact_id"
    t.text     "application_process"
    t.string   "deadline"
    t.text     "notes"
    t.datetime "created_at",              :null => false
    t.datetime "updated_at",              :null => false
    t.integer  "user_id"
  end

  create_table "internships_internships_languages", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "language_id"
  end

  create_table "internships_internships_locations", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "location_id"
  end

  create_table "internships_internships_semesters", :id => false, :force => true do |t|
    t.integer "internship_id"
    t.integer "semester_id"
  end

  create_table "internships_languages", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_locations", :force => true do |t|
    t.string   "city"
    t.integer  "state_id"
    t.integer  "country_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_provider_contacts", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.string   "fax"
    t.boolean  "can_call"
    t.integer  "provider_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "internships_provider_types", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_providers", :force => true do |t|
    t.string   "name"
    t.text     "bio"
    t.string   "website"
    t.boolean  "agreement_on_file"
    t.integer  "provider_type_id"
    t.text     "notes"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
  end

  create_table "internships_semesters", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "internships_states", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "roles_users", :id => false, :force => true do |t|
    t.integer "role_id"
    t.integer "user_id"
  end

  create_table "users", :force => true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "net_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
