class CreateFinancialAssistanceOptionTypes < ActiveRecord::Migration
  def change
    create_table :internships_financial_assistance_option_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
