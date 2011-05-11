class InternshipInstance < ActiveRecord::Base
  belongs_to :internship
  belongs_to :student
  belongs_to :semester
end
