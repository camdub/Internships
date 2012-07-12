# This migration comes from internships (originally 20110512190212)
class RenameFinancialAssistanceOptionsInternshipsJoinTable < ActiveRecord::Migration
  def change
    rename_table :financial_assistance_options_internships, :internships_financial_assistance_options_internships
  end
end
