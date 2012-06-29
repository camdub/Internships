# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :state do
    sequence(:name) { |i| "State #{i}" }
  end
end
