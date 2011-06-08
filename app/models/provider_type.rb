class ProviderType < ActiveRecord::Base
  has_many :providers
  
  validates_presence_of :name
end

# == Schema Information
#
# Table name: provider_types
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

