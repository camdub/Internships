module FieldsHelper
  def fields_json(objects)
    (objects.map!{|obj|{:name => obj.name + ' (' +  obj.industry.name + ')', :value => obj.id}}).to_json
  end
end
