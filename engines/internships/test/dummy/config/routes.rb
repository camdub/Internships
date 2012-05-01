Rails.application.routes.draw do
  match 'application/cas_response' => 'application#cas_response', :as => 'cas_response_redirect'
  match 'logout' => 'users#logout', :as => 'logout'

  mount Internships::Engine => "/internships", :as => :internships
  
  root :to => "pages#index"
  
end