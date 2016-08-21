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







end
