# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :provider do
    
    sequence(:name) { |i| "Provider #{i}" }
    sequence(:agreement_on_file) { |i| (rand(1...2).even? ? true : false) }
    bio "This is the biography of the provider.  They can tell about themselves to the students."
    notes "These notes go with the provider but are for internal use.  Notes cannot be viewed publicly."
    website "http://domain.com/website/path"
    
    association :provider_type
  end
end
