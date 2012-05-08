module Internships
  class Internship < ActiveRecord::Base
    has_and_belongs_to_many :fields, :join_table => 'internships_fields_internships'
    has_and_belongs_to_many :languages, :join_table => 'internships_internships_languages'
    has_and_belongs_to_many :semesters, :join_table => 'internships_internships_semesters'
    has_and_belongs_to_many :financial_assistance_options, :join_table => 'internships_financial_assistance_options_internships'
    has_and_belongs_to_many :academic_focuses, :join_table => 'internships_academic_focuses_internships'
    has_and_belongs_to_many :locations, :join_table => 'internships_internships_locations'
    belongs_to :academic_contact
    belongs_to :provider
    belongs_to :provider_contact
    has_many :internship_instances
  
    belongs_to :user
  
    validates_presence_of :name
    validates_presence_of :description
    validates_presence_of :qualifications
  
    #attr_accessible :name, :field_tokens, :language_tokens
  
  end
end
# == Schema Information
#
# Table name: internships
#
#  id                      :integer         not null, primary key
#  name                    :string(255)
#  provider_id             :integer
#  is_paid                 :boolean
#  is_full_time            :boolean
#  is_part_time            :boolean
#  stipend                 :float
#  description             :text
#  qualifications          :text
#  qualifications_academic :text
#  for_credit              :boolean
#  requires_us_citizenship :boolean
#  academic_contact_id     :integer
#  provider_contact_id     :integer
#  application_process     :text
#  deadline                :date
#  notes                   :text
#  created_at              :datetime
#  updated_at              :datetime
#

