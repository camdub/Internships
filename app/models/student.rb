class Student < ActiveRecord::Base
  has_and_belongs_to_many :academic_focuses
  has_many :internship_instance
  
  validates_presence_of :name
  validates :email, :presence => true, :email => true
  validates_presence_of :gpa # change this to a regex for gpa
  
end

# == Schema Information
#
# Table name: students
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  email      :string(255)
#  gpa        :decimal(, )
#  created_at :datetime
#  updated_at :datetime
#

