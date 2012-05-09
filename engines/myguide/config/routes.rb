Myguide::Engine.routes.draw do

  match 'myguide/dashboard' => "pages#myguide_admin_dashboard", :as => 'myguide_admin_dashboard'
  match 'myguide/:myguide_user_id' => 'pages#myguide', :as => 'myguide'

  match 'users/:id/tasks' => 'Users#tasks'

  resources :long_term_goals
  resources :short_term_goals
  resources :tasks
  resources :tags

  root :to => "myguide#index"

  # See how all your routes lay out with "rake routes"

end
