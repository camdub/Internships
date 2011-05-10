class Location < ActiveRecord::Base
  has_and_belongs_to_many :internships
  has_one :state
  has_one :country
end
