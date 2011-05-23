class AcademicFocusType < ActiveRecord::Base
  #belongs_to :academic_focus
  has_many :academic_focus
  
  validates_presence_of :name
end

# == Schema Information
#
# Table name: academic_focus_types
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

