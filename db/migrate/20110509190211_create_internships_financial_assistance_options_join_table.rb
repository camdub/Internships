class CreateInternshipsFinancialAssistanceOptionsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :internships_financial_assistance_options, :id => false do |t|
      t.integer :internship_id
      t.integer :financial_assistance_option_id
    end
  end

  def self.down
    drop_table :internships_financial_assistance_options
  end
end
