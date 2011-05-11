class AcademicContact < ActiveRecord::Base
  has_many :internships
  belongs_to :department  
end
