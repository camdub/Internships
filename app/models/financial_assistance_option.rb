class FinancialAssistanceOption < ActiveRecord::Base
  has_and_belongs_to_many :internships
  has_one :financial_assistance_option_type
end
