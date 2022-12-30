class Api::ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index, :newest]
    after_action do 
        book = Book.find(params[:book_id])
        book.update_attribute(:average_rating, book.reviews.average(:rating))
    end
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review
    end

    def newest
        reviews = Review.all
        render json: reviews.order(created_at: :desc)
    end

    def three_stars
        reviews = @user.reviews.where(rating: 3)
        render json: reviews
    end

    private

    def review_params
        params.permit(:rating, :review_body, :user_id, :book_id)
    end

end
