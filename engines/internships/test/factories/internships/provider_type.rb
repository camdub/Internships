# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :provider_type do
    sequence(:name) { |i| "Provider Type #{i}" }
  end
end
