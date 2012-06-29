# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :financial_assistance_option do
    sequence(:name) { |i| "Financial Assistance Option #{i}" }
    sequence(:how_much)  { |i| (rand(1...10)*100) }
    qualifications "Lots of text qualifications"
    source "The Source of the Assistance"
    website "http://domain.com"
    association :financial_assistance_option_type
  end
end