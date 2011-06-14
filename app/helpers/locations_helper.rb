module LocationsHelper
  def locations_json(objects)
    (objects.map!{|obj|{:name => obj.city + ', ' + obj.country.name, :value => obj.id}}).to_json
  end
end
