class RenameFinancialAssistanceOptions < ActiveRecord::Migration
  def change
    rename_table :financial_assistance_options, :internships_financial_assistance_options
  end
end
