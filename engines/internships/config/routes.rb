Internships::Engine.routes.draw do
  
  match 'internships/dashboard' => "internships#dashboard", :as => 'internship_dashboard'
  match 'internships/view' => "pages#map", :as => 'internships_map'
    
    
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
  root :to => 'map#index'
end
