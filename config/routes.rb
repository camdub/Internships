Internships::Application.routes.draw do
  
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
  resources :internships do
    get :autosuggest_field_name, :on => :collection
    get :autosuggest_semester_name, :on => :collection
    get :autosuggest_financial_assistance_option_name, :on => :collection
    get :autosuggest_academic_focus_name, :on => :collection
    get :autosuggest_language_name, :on => :collection
    get :autosuggest_location_city, :on => :collection
  end
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
