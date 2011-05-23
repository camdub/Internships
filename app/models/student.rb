class Student < ActiveRecord::Base
  has_and_belongs_to_many :academic_focuses
  has_many :internship_instance
  
  validates_presence_of :name
  validates :email, :presence => true, :email => true
  validates_presence_of :gpa # change this to a regex for gpa
  validates_inclusion_of :gpa, :in => 0..4, :message => "a GPA must fall in the range of 0.0 <= gpa <= 4.0"
  
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

