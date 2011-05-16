class State < ActiveRecord::Base
  belongs_to :location
  before_filter establish_connection :production
  
end
