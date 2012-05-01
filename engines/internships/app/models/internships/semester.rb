module Internships
  class Semester < ActiveRecord::Base
    has_and_belongs_to_many :internships, :join_table => 'internships_internships_semesters'
    has_many :internship_instances
  
    validates_presence_of :name
  end
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

