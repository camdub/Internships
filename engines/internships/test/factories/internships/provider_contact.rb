# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :provider_contact do
    sequence(:name) { |i| "Provider Contact #{i}" }
    sequence(:email) { |i| "user#{i}@domain.com" }
    sequence(:phone) { |i| "#{rand(1111111111...9999999999)}" }
    sequence(:fax) { |i| "#{rand(1111111111...9999999999)}" }
    sequence(:can_call) { |i| (rand(1...2).even? ? true : false) }
    
    association :provider    
  end
end


