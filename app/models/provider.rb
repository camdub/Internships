class Provider < ActiveRecord::Base
  has_one :provider_type
  belongs_to :provider_contact
  has_many :internships
end
