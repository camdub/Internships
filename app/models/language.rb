class Language < ActiveRecord::Base
  has_and_belongs_to_many :internships
  
  validates_presence_of :name
end

# == Schema Information
#
# Table name: languages
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

