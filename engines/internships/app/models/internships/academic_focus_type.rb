module Internships
  class AcademicFocusType < ActiveRecord::Base

    has_many :academic_focuses
  
    validates_presence_of :name
  end
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

