Rails.application.routes.draw do
  resources :materials
  resources :users do
    resources :towninfos
  end
  resources :users do 
    resources :listings
  end
  resources :listings
  resources :create_gigs
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # get '/users/:id/towninfos' to 
  post'/towninfos/:id', to: 'towninfos#create'
  get '/towninfos', to: 'towninfos#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: :create 
  get '/users/:user_id/materials/:id', to: 'materials#add_material_to_listings'
end
