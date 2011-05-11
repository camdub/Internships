namespace :app do
    desc <<-DESC
        Load Testing data into Dev database
        Run using the command 'rake app:load_demo_data'
    DESC
    task :load_demo_data => [:environment] do
        
        Student.delete_all
        Location.delete_all
        FinancialAssistanceOptionType.delete_all
        FinancialAssistanceOption.delete_all
        ProviderType.delete_all
        Provider.delete_all
        ProviderContact.delete_all
        AcademicContact.delete_all
        Internship.delete_all
        InternshipInstance.delete_all 

        Student.create([
          {:name => 'Cameron Woodmansee', :email => 'cameron29w@gmail.com', :gpa => 3.9, :academic_focuses => [AcademicFocus.all[0], AcademicFocus.all[1]]},
          {:name => 'Kory Calmes', :email => 'kory@calmes.org', :gpa => 3.9, :academic_focuses => [AcademicFocus.all[2], AcademicFocus.all[3]]}
        ])

        Location.create([
            {:city => 'Provo', 
             :state => State.where(:name => 'Utah').first, 
             :country => Country.where(:un_code => 'USA').first 
            },
            {:city => 'Paris',  
             :country => Country.where(:un_code => 'FRN').first 
            }
        ])
        
        assistanceTypes = FinancialAssistanceOptionType.create([
            {:name => 'Scholarship'},
            {:name => 'Loan'},
            {:name => 'Grant'}
        ])
        
        FinancialAssistanceOption.create([
            {:name => 'Dave', 
             :financial_assistance_option_type => assistanceTypes.first,
             :how_much => 3000,
             :qualifications => 'Love thyself.  No nudity.',
             :source => 'Dave Waddell',
             :website => 'http://humadvisement.byu.edu'
            }
        ])
        
        providerTypes = ProviderType.create([
            { :name => 'Business' },
            { :name => 'Study Abroad' },
            { :name => 'Academic' }
        ])
        
        Provider.create([
            {
                :name => 'Microsoft',
                :bio => 'We crush the competition!',
                :website => 'http://microsoft.com',
                :agreement_on_file => true,
                :provider_type => providerTypes.first,
                :notes => 'We hate Cameron.'
            }
        ])
        
        ProviderContact.create([
            {
                :name => 'Xin Chao',
                :email => 'xin@demacia.com',
                :phone => '987987987',
                :fax => '646546546',
                :can_call => true,
                :provider => Provider.all.first
            }
        ])
        
        AcademicContact.create([
            {
                :name => 'Tyler Pedersen',
                :office_location => 'WSC',
                :phone => '684654654',
                :email => 'tyler@byu.edu',
                :department => Department.all.first
            }
        ])
        
        Internship.create([
            {
                :name => 'Software Engineer in Test',
                :provider => Provider.all.first,
                :is_paid => true,
                :is_full_time => true,
                :is_part_time => false,
                :stipend => 8000,
                :description => 'Work and MS and test stuff',
                :qualifications => 'Nerdy and not ashamed.',
                :qualifications_academic => 'Pass your CS classes.',
                :for_credit => false,
                :requires_us_citizenship => true,
                :academic_contact => AcademicContact.all.first,
                :provider_contact => ProviderContact.all.first,
                :application_process => 'Do 2 interviews. Get them to like you.',
                :deadline => Date.today + 3.days,
                :notes => 'Can there be more info about this?',
                :semesters => [Semester.all.first, Semester.all.last],
                :financial_assistance_options => [FinancialAssistanceOption.all.first],
                :locations => [Location.all.last, Location.all.first],
                :languages => [Language.all.first],
                :fields => [Field.all.first],
                :academic_focuses => [AcademicFocus.all.last]
            }
        ])
        
        InternshipInstance.create([
            {
                :internship => Internship.all.first,
                :student => Student.all.first,
                :comments => 'I loved this internship',
                :rating => 4.0,
                :recommended => true,
                :semester => Semester.all.last,
                :job_offered => false,
                :can_contact => true 
            }
        ])
    
    end
end