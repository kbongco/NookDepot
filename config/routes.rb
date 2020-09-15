Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :materials
  resources :listings
  resources :town_infos
  resources :services
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: :create 
  get '/users/:user_id/materials/:id', to: 'materials#add_material_to_listings'
end
