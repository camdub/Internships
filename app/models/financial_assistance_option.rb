class FinancialAssistanceOption < ActiveRecord::Base
  has_and_belongs_to_many :internships
  belongs_to :financial_assistance_option_type
  
  validates_presence_of :name
  validates_presence_of :how_much
  validates :website, :presence => true, :url => true
  validates_presence_of :qualifications
  validates_presence_of :source
  
end

# == Schema Information
#
# Table name: financial_assistance_options
#
#  id                                  :integer         not null, primary key
#  name                                :string(255)
#  financial_assistance_option_type_id :integer
#  how_much                            :float
#  qualifications                      :text
#  source                              :string(255)
#  website                             :string(255)
#  created_at                          :datetime
#  updated_at                          :datetime
#

