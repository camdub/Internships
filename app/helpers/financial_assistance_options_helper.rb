module FinancialAssistanceOptionsHelper
  def financial_assistance_options_json(objects)
    (objects.map!{|obj|{:name => obj.name, :value => obj.id}}).to_json
  end
end
