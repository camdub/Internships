# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :field do
    sequence(:name) { |i| "Field #{i}" }
    association :industry
  end
end