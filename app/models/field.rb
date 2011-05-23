class Field < ActiveRecord::Base
  has_and_belongs_to_many :internships
  belongs_to :industry
  
  validates_presence_of :name
end

# == Schema Information
#
# Table name: fields
#
#  id          :integer         not null, primary key
#  name        :string(255)
#  industry_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#

