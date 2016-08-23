class UsersController < ApplicationController

  def new
    if current_user
      redirect_to root_url
    else
      @user = User.new
    end
  end

  def create
    @user = User.new(user_params)
    @user.temp_offset = @user.temp_offset.to_i
    if @user.save
      log_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:name,:email,:password,:temp_offset,:zipcode)
  end
end
