Rails.application.routes.draw do
  
  resources :users
  resources :reviews
  resources :books
  get '/newest-reviews', to: 'reviews#newest'
  get '/profile', to: 'users#show'
  get '/random-book', to: 'books#random'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
