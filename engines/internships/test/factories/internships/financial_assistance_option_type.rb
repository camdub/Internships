# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :financial_assistance_option_type do
    sequence(:name) { |i| "Financial Assistance Option Type #{i}" }
  end
end