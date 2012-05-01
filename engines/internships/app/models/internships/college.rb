module Internships
  class College < ActiveRecord::Base
    has_many :departments
  
    validates_presence_of :name
  end
end
# == Schema Information
#
# Table name: colleges
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

