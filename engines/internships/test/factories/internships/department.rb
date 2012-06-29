# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :department do
    sequence(:name) { |i| "Department #{i}" }
    association :college
  end
end