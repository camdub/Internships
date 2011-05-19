class Student < ActiveRecord::Base
  has_and_belongs_to_many :academic_focuses
  has_many :internship_instance
end
