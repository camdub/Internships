class Industry < ActiveRecord::Base
  has_many :fields
  
  validates_presence_of :name
end

# == Schema Information
#
# Table name: industries
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

