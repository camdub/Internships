class Country < ActiveRecord::Base
  belongs_to :location
  
  validates_presence_of :name
  validates_presence_of :un_code
  validates_length_of :un_code, :within => 3..3
  
end

# == Schema Information
#
# Table name: countries
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  un_code    :string(255)
#  created_at :datetime
#  updated_at :datetime
#

