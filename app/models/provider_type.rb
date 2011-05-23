class ProviderType < ActiveRecord::Base
  belongs_to :provider
  
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

