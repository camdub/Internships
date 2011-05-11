class AcademicFocus < ActiveRecord::Base
  #has_one :academic_focus_type
  belongs_to :academic_focus_type
  belongs_to :department
  has_and_belongs_to_many :students
  has_and_belongs_to_many :internships
end
