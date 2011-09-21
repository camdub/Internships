Internships::Application.routes.draw do

  match 'application/cas_response' => 'Application#cas_response', :as => 'cas_response_redirect'
  match 'logout' => 'users#logout', :as => 'logout'
  
  match 'myguide' => 'pages#myguide', :as => 'myguide'
  match '403' => 'pages#forbidden403', :as => 'forbidden'
  match 'internships/dashboard' => "Internships#dashboard", :as => 'internship_dashboard'
  match 'myguide/dashboard' => "pages#myguide_admin_dashboard", :as => 'myguide_admin_dashboard'
  match 'internships/view' => "pages#map", :as => 'internships_map'
  match 'admin/roles' => "pages#roles", :as => 'admin_roles'
  
  #These route definitions are for the autosuggest feature
  match 'fields/autosuggest' => 'Fields#autosuggest', :as => 'autosuggest_fields'
  match 'academic_focuses/autosuggest' => 'AcademicFocuses#autosuggest', :as => 'autosuggest_academic_focuses'
  match 'locations/autosuggest' => 'Locations#autosuggest', :as => 'autosuggest_locations'
  match 'semeters/autosuggest' => 'Semesters#autosuggest', :as => 'autosuggest_semesters'
  match 'languages/autosuggest' => 'Languages#autosuggest', :as => 'autosuggest_languages'
  match 'financial_assistance_options/autosuggest' => 'FinancialAssistanceOptions#autosuggest', :as => 'autosuggest_financial_assistance_options'
  match 'industries/autosuggest' => 'Industries#autosuggest', :as => 'autosuggest_industries'
  match 'providers/autosuggest' => 'Providers#autosuggest', :as => 'autosuggest_providers'
  match 'long_term_goals/autosuggest' => 'LongTermGoals#autosuggest', :as => 'autosuggest_long_term_goals'
  match 'short_term_goals/autosuggest' => 'ShortTermGoals#autosuggest', :as => 'autosuggest_short_term_goals'
  match 'tasks/autosuggest' => 'Tasks#autosuggest', :as => 'autosuggest_tasks'
  match 'tags/autosuggest' => 'Tags#autosuggest', :as => 'autosuggest_tags'
  
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
  resources :users
  resources :roles
  resources :long_term_goals
  resources :short_term_goals
  resources :tasks
  resources :tags
  
  root :to => "pages#index"

  # See how all your routes lay out with "rake routes"

end
