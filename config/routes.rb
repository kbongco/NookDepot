Rails.application.routes.draw do
  resources :materials
  resources :listings
  resources :towninfos
  resources :users
  resources :create_gigs
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: :create 
  get '/users/:user_id/materials/:id', to: 'materials#add_material_to_listings'
end
