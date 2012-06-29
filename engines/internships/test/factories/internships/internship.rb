# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :internship do
    
    sequence(:name) { |i| "Internship #{i}" }
    sequence(:is_paid) { |i| (rand(1...2).even? ? true : false) }
    sequence(:is_full_time) { |i| (rand(1...2).even? ? true : false) }
    sequence(:is_part_time) { |i| (rand(1...2).even? ? true : false) }
    sequence(:for_credit) { |i| (rand(1...2).even? ? true : false) }
    sequence(:requires_us_citizenship) { |i| (rand(1...2).even? ? true : false) }
    
    stipend "Free Housing"
    description "The description of the internship"
    qualifications "These are all of the qualifications for the internship"
    qualifications_academic "These are other qualifications that are academic"
    application_process "The process one must go through to apply for the internship"
    deadline "First week of July"
    notes "These notes go with the internship but are for internal use.  Notes cannot be viewed publicly"
    
    association :provider
    association :academic_contact
    association :provider_contact    
    
  end
end