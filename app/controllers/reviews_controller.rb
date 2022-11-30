class ReviewsController < ApplicationController
    skip_before_action :authorize, only: :index
    
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

    private

    def review_params
        params.permit(:rating, :review_body, :user_id, :book_id)
    end

end
