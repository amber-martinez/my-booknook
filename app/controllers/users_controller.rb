class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @user, include: :reviews
    end

    def update
        user = User.find(params[:id])
        user.update!(user_update_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        session.delete :user_id
        head :no_content
    end

    private
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :bio, :profile_pic_url)
    end

    def user_update_params
        params.permit(:username, :bio, :profile_pic_url)
    end

end
