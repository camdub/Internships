class ProviderContact < ActiveRecord::Base
  has_many :internships
  has_one :provider
end
