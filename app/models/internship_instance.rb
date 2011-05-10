class InternshipInstance < ActiveRecord::Base
  has_one :internship
  has_one :student
end
