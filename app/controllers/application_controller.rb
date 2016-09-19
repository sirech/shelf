class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include Prerender

  def render_invalid_record(errors)
    errors = errors.map { |field, message| { field: field, message: message } }
    render json: errors.to_json, status: 422
  end
end
