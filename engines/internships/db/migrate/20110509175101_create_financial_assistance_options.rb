class CreateFinancialAssistanceOptions < ActiveRecord::Migration
  def change
    create_table :internships_financial_assistance_options do |t|
      t.string  :name
      t.integer :financial_assistance_option_type_id
      t.integer :how_much
      t.text    :qualifications
      t.string  :source
      t.string  :website

      t.timestamps
    end
  end
end
