class ProviderContact < ActiveRecord::Base
  belongs_to :internship
  has_one :provider
end
