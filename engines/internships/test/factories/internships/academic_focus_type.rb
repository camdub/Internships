# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :academic_focus_type do
    sequence(:name) { |i| (i.even? ? "major" : "minor") }
    
    factory :major do
      name "major"
    end
    factory :major do
      name "minor"
    end
  end
end