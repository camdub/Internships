module Internships
  class Language < ActiveRecord::Base
    has_and_belongs_to_many :internships, :join_table => 'internships_internships_languages'
  
    validates_presence_of :name
  end
end
# == Schema Information
#
# Table name: languages
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

