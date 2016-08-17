class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    if session[:session_token]
      @current_user = User.find_by(session: session[:session_token])
    else
      nil
    end
  end

  def log_in!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
