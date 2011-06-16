module IndustriesHelper
  def industries_json(objects)
    (objects.map!{|obj|{:name => obj.name, :value => obj.id}}).to_json
  end
end
