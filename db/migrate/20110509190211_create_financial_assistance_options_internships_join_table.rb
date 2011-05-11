class CreateFinancialAssistanceOptionsInternshipsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :financial_assistance_options_internships, :id => false do |t|
      t.integer :financial_assistance_option_id
      t.integer :internship_id
    end
  end

  def self.down
    drop_table :financial_assistance_options_internships
  end
end
