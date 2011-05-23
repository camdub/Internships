class ProviderContact < ActiveRecord::Base
  has_many :internships
  has_one :provider
  
  validates_presence_of :name
  validates :email, :presence => true, :email => true
  validates :phone, :presence => true, :phone =>  true
  validates :fax, :presence => true, :phone => true
  
end

# == Schema Information
#
# Table name: provider_contacts
#
#  id          :integer         not null, primary key
#  name        :string(255)
#  email       :string(255)
#  phone       :string(255)
#  fax         :string(255)
#  can_call    :boolean
#  provider_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#

