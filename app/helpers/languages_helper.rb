module LanguagesHelper
  def languages_json(objects)
    (objects.map!{|obj|{:name => obj.name, :value => obj.id}}).to_json
  end
end
