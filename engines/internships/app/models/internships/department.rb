module Internships
  class Department < ActiveRecord::Base
    belongs_to :college
    has_many :academic_focuses
    has_many :academic_contacts
  
    validates_presence_of :name
  end
end
# == Schema Information
#
# Table name: departments
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  college_id :integer
#  created_at :datetime
#  updated_at :datetime
#

