Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :reviews, only: [:create]
    resources :books, only: [:index, :show, :create, :destroy]

    #reviews
    get '/newest-reviews', to: 'reviews#newest'
    get '/three', to: 'reviews#three_stars'

    #users
    get '/user-profile', to: 'users#show'
    get '/my-reviews', to: 'users#user_reviews'
    post '/user-signup', to: 'users#create'

    #books
    get '/random-book', to: 'books#random'
    get '/top-rated-books', to: 'books#books_with_average_ratings'
    get '/newest-books', to: 'books#newest'
    get '/most-reviews', to: 'books#most_reviews'
    get '/:genre', to: 'books#books_by_genre'

    #sessions
    post '/login-user', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
  end


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
