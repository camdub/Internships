# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :location do
    sequence(:city) { |i| "Language #{i}" }
    association :state
    association :country
  end
end