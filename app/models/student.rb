class Student < ActiveRecord::Base
  has_and_belongs_to_many :academic_focuses
  belongs_to :internship_instance
end
