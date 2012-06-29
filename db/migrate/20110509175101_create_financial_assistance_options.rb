class CreateFinancialAssistanceOptions < ActiveRecord::Migration
  def self.up
    create_table :financial_assistance_options do |t|
      t.string  :name
      t.integer :financial_assistance_option_type_id
      t.integer :how_much
      t.text    :qualifications
      t.string  :source
      t.string  :website

      t.timestamps
    end
  end

  def self.down
    drop_table :financial_assistance_options
  end
end
