Internships::Application.routes.draw do
  
  
  #These route definitions are for the autosuggest feature
  match 'fields/autosuggest' => 'Fields#autosuggest', :as => 'autosuggest_fields'
  match 'academic_focuses/autosuggest' => 'AcademicFocuses#autosuggest', :as => 'autosuggest_academic_focuses'
  match 'locations/autosuggest' => 'Locations#autosuggest', :as => 'autosuggest_locations'
  match 'semeters/autosuggest' => 'Semesters#autosuggest', :as => 'autosuggest_semesters'
  match 'languages/autosuggest' => 'Languages#autosuggest', :as => 'autosuggest_languages'
  match 'financial_assistance_options/autosuggest' => 'FinancialAssistanceOptions#autosuggest', :as => 'autosuggest_financial_assistance_options'

  resources :academic_contacts
  resources :academic_focuses
  resources :academic_focus_types
  resources :colleges
  resources :countries
  resources :departments
  resources :fields
  resources :financial_assistance_options
  resources :financial_assistance_option_types
  resources :industries
  resources :internships
  resources :internship_instances
  resources :languages
  resources :locations
  resources :providers
  resources :provider_contacts
  resources :provider_types
  resources :semesters
  resources :states
  resources :students
  resources :map
  
  root :to => "pages#index"

  # See how all your routes lay out with "rake routes"

end
