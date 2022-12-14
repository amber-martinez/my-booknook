class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize

  private

  def authorize
    @user = User.find_by(id: session[:user_id])
    render json: { error: ['oops! you\'re not logged in!'] }, status: :unauthorized unless @user
  end

  def render_not_found_response(e)
    render json: { errors: e.record.errors.full_messages }, status: not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
