module Internships
  class AcademicFocus < ActiveRecord::Base
    belongs_to :academic_focus_type
    belongs_to :department
    has_and_belongs_to_many :students, :join_table => 'internships_academic_focuses_students'
    has_and_belongs_to_many :internships, :join_table => 'internships_academic_focuses_internships'
  
    validates_presence_of :name
  
  end
end
# == Schema Information
#
# Table name: academic_focuses
#
#  id                     :integer         not null, primary key
#  name                   :string(255)
#  academic_focus_type_id :integer
#  department_id          :integer
#  created_at             :datetime
#  updated_at             :datetime
#