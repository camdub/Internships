class CreateFinancialAssistanceOptionsInternshipsJoinTable < ActiveRecord::Migration
  def change
    create_table :internships_financial_assistance_options_internships, :id => false do |t|
      t.integer :internship_id
      t.integer :financial_assistance_option_id
    end
  end
end
