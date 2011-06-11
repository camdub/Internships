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
  
  #attr_accessible :name, :field_tokens, :language_tokens
  
  attr_reader :field_tokens, :language_tokens, :semester_tokens,
              :financial_assistance_option_tokens, :academic_focus_tokens,
              :location_tokens
  
  # TOKEN PROCESSING FOR AUTO-COMPLETE
  def set_fields=(ids)
    self.field_ids = ids.split(",")
  end
  
  def set_semesters=(ids)
    self.semester_ids = ids.split(",")
  end
  
  def set_financial_assistance_options=(ids)
    self.financial_assistance_option_ids = ids.split(",")
  end
  
  def set_academic_focuses=(ids)
    self.academic_focus_ids = ids.split(",")
  end
  
  def set_languages=(ids)
    self.language_ids = ids.split(",")
  end
  
  def set_locations=(ids)
    self.location_ids = ids.split(",")
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

