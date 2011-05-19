class CreateFinancialAssistanceOptionTypes < ActiveRecord::Migration
  def self.up
    create_table :financial_assistance_option_types do |t|
      t.string :name

      t.timestamps
    end
  end

  def self.down
    drop_table :financial_assistance_option_types
  end
end
