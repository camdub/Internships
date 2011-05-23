class Location < ActiveRecord::Base
  has_and_belongs_to_many :internships
  has_one :state
  has_one :country
  
  validates_presence_of :city
end

# == Schema Information
#
# Table name: locations
#
#  id         :integer         not null, primary key
#  city       :string(255)
#  state_id   :integer
#  country_id :integer
#  created_at :datetime
#  updated_at :datetime
#

