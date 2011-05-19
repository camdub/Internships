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
  
end
