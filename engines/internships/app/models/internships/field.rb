module Internships
  class Field < ActiveRecord::Base
    has_and_belongs_to_many :internships, :join_table => 'internships_field_internships'
    belongs_to :industry
  
    validates_presence_of :name
  end
end
# == Schema Information
#
# Table name: fields
#
#  id          :integer         not null, primary key
#  name        :string(255)
#  industry_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#

