class FinancialAssistanceOptionType < ActiveRecord::Base
  has_many :financial_assistance_option
  
  validates_presence_of :name
end

# == Schema Information
#
# Table name: financial_assistance_option_types
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

