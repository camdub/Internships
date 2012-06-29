# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :academic_contact do
    sequence(:name) { |i| "Academic Contact #{i}" }
    sequence(:office_location)  { |i| "#{rand(1000...4000)} JFSB" }
    sequence(:phone) { |i| "#{rand(1111111111...9999999999)}" }
    sequence(:email) { |i| "user#{i}@domain.com" }
    association :department
  end
end