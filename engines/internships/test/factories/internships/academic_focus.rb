# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :academic_focus do
    sequence(:name) { |i| "Degree #{i}" }
    association :academic_focus_type
    association :department
  end
end