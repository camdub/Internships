class Semester < ActiveRecord::Base
  has_and_belongs_to_many :internships
  has_many :internship_instances
  
  validates_presence_of :name
end

# == Schema Information
#
# Table name: semesters
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

