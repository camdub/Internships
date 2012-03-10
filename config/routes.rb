Internships::Application.routes.draw do

  match 'application/cas_response' => 'Application#cas_response', :as => 'cas_response_redirect'
  match 'logout' => 'users#logout', :as => 'logout'
  
  match 'myguide/dashboard' => "pages#myguide_admin_dashboard", :as => 'myguide_admin_dashboard'
  match 'myguide/:myguide_user_id' => 'pages#myguide', :as => 'myguide'
  match '403' => 'pages#forbidden403', :as => 'forbidden'
  match 'internships/dashboard' => "internships#dashboard", :as => 'internship_dashboard'
  match 'internships/view' => "pages#map", :as => 'internships_map'
  match 'admin/roles' => "pages#roles", :as => 'admin_roles'
  
  match 'users/:id/tasks' => 'Users#tasks'
  
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
