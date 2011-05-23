class AcademicFocus < ActiveRecord::Base
  #has_one :academic_focus_type
  belongs_to :academic_focus_type
  belongs_to :department
  has_and_belongs_to_many :students
  has_and_belongs_to_many :internships
  
  validates_presence_of :name
  
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

