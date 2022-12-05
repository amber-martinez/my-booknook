class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index, :newest]
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = Review.create(review_params)
    end

    def newest
        reviews = Review.all
        render json: reviews.order(created_at: :desc)
    end

    def user_reviews
        user_reviews = Review.where(id: @user.reviews.ids)
        render json: user_reviews
    end

    def reviews_by_rating
        # reviews = Review.all 
        #book.reviews.average(:rating)
        books = Book.all

        avg = books.flat_map { |book| [avg_rating: book.reviews.average(:rating), title: book.title, author: book.author, image_url: book.image_url, genre: book.genre] }


        render json: avg
    end

    private

    def review_params
        params.permit(:rating, :review_body, :user_id, :book_id)
    end

end
