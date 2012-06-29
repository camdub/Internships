# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :internship_instance do
        
    comments "The comments of the student about the internship"
    rating 2.5
    
    sequence(:recommended) { |i| (rand(1...2).even? ? true : false) }
    sequence(:job_offered) { |i| (rand(1...2).even? ? true : false) }
    sequence(:job_accepted) { |i| (rand(1...2).even? ? true : false) }
    sequence(:can_contact) { |i| (rand(1...2).even? ? true : false) }
    
    association :internship
    association :student
    association :semester 
  end
end