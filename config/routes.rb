Rails.application.routes.draw do
  resources :materials
  resources :listings
  resources :town_infos
  resources :services
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: :create 
end