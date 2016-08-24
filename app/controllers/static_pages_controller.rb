class StaticPagesController < ApplicationController
  def root
    if true
      render :root
    else
      redirect_to new_session_url
    end
  end
end
