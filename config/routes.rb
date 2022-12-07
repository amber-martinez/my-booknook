Rails.application.routes.draw do
  
  resources :users
  resources :reviews, only: [:create]
  resources :books, only: [:index, :show, :create, :destroy]

  #reviews
  get '/newest-reviews', to: 'reviews#newest'
  get '/my-reviews', to: 'reviews#user_reviews'
  # post '/reviews', to: 'reviews#create'

  #users
  get '/user-profile', to: 'users#show'
  post '/user-signup', to: 'users#create'
  # patch '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'

  #books
  get '/random-book', to: 'books#random'
  get '/top-rated-books', to: 'books#books_with_average_ratings'
  get '/newest-books', to: 'books#newest'
  get '/most-reviews', to: 'books#most_reviews'
  get '/:genre', to: 'books#books_by_genre'

  #sessions
  post '/login-user', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
