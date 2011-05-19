class Semester < ActiveRecord::Base
  has_and_belongs_to_many :internships
  has_many :internship_instances
end
