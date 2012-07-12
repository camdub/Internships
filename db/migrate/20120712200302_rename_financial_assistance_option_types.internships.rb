# This migration comes from internships (originally 20110512000222)
class RenameFinancialAssistanceOptionTypes < ActiveRecord::Migration
  def change
    rename_table :financial_assistance_option_types, :internships_financial_assistance_option_types
  end
end
