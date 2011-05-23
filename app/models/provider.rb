class Provider < ActiveRecord::Base
  has_one :provider_type
  has_one :provider_contact
  has_many :internships
  
  validates_presence_of :name
  validates_presence_of :bio
  validates :website, :presence => true, :url => true
  
end

# == Schema Information
#
# Table name: providers
#
#  id                :integer         not null, primary key
#  name              :string(255)
#  bio               :text
#  website           :string(255)
#  agreement_on_file :boolean
#  provider_type_id  :integer
#  notes             :text
#  created_at        :datetime
#  updated_at        :datetime
#

