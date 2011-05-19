class AcademicContact < ActiveRecord::Base
  has_many :internships
  belongs_to :department
  
  validates :status, :presence => true
  validates_presence_of :name
end
