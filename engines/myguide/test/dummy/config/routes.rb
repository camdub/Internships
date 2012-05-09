Rails.application.routes.draw do
  match 'application/cas_response' => 'application#cas_response', :as => 'cas_response_redirect'
  match 'logout' => 'users#logout', :as => 'logout'

  mount Myguide::Engine => "/myguide", :as => :myguide
  
  root :to => "pages#index"
  
end