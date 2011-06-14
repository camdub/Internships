module AcademicFocusesHelper
  def academic_focuses_json(objects)
    (objects.map!{|obj|{:name => obj.name + ' (' + obj.academic_focus_type.name + ')', :value => obj.id}}).to_json
  end
end
