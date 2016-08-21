class Api::OutfitsController < ApplicationController

  def index
    # user = User.find_by_id(params[:id])
    user = User.first
    @outfits = user.outfits.includes(:articles)
    render :index
  end

  def create
    @outfit = Outfit.new(outfit_params)
    @outfit.user_id = current_user.id
    @outfit.save

    @outfit.save_compositions(params[:outfit][:articles])
    @articles = @outfit.articles

    render :show
  end
  private

  def outfit_params
    params.require(:outfit).permit(:temp_min,:temp_max,:rain,:clouds,:snow,:wind,:formality,:last_worn,:title,:notes,:articles)
  end

end
