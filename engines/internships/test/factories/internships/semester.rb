# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :semester do
    sequence(:name) { |i| "Semester #{i}" }
  end
end
