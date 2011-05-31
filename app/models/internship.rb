class Internship < ActiveRecord::Base
  has_and_belongs_to_many :fields
  has_and_belongs_to_many :languages
  has_and_belongs_to_many :semesters
  has_and_belongs_to_many :financial_assistance_options
  has_and_belongs_to_many :academic_focuses
  has_and_belongs_to_many :locations
  belongs_to :academic_contact
  belongs_to :provider
  belongs_to :provider_contact
  has_many :internship_instances
  
  validates_presence_of :name
  validates_presence_of :description
  validates_presence_of :qualifications
  validates_presence_of :qualifications_academic
  
  attr_accessible :name, :field_tokens, :language_tokens
  attr_reader :field_tokens, :language_tokens
  
  def field_tokens=(ids)
    self.field_ids = ids.split(",")
  end
  
  def language_tokens=(ids)
    self.language_ids = ids.split(",")
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

