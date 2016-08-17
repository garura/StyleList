class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      render :show
    else
      render json: {errors: "Invalid Email/Password Combination"}, status: :unauthorized
    end
  end

  def show
    render :show
  end

  def destroy
    log_out! if current_user
    render :show
  end
end
