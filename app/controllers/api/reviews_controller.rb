class Api::ReviewsController < ApplicationController
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
        review = Review.create!(review_params)
        render json: review
    end

    def newest
        reviews = Review.all
        render json: reviews.order(created_at: :desc)
    end

    private

    def review_params
        params.permit(:rating, :review_body, :user_id, :book_id)
    end

end
