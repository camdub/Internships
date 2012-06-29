# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :country do
    sequence(:name) { |i| "Country #{i}" }
    sequence(:un_code) { |i| "UN#{i}" }
  end
end