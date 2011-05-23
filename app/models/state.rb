class State < ActiveRecord::Base
  belongs_to :location
  
  validates_presence_of :name
  
end

# == Schema Information
#
# Table name: states
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

