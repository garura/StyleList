class Api::OutfitsController < ApplicationController

  before_action :require_logged_in

  def index
    user = current_user
    @outfits = user.outfits.includes(:articles)
    @ids = @outfits.map { |outfit| outfit.id }
    render :index
  end

  def create
    @outfit = Outfit.new(outfit_params)
    @outfit.user_id = current_user.id
    @outfit.last_worn = Date.today
    @outfit.save

    @outfit.save_compositions(params[:outfit][:articles])
    # # apporach 1
    # @articles = @outfit.articles
    # @articles.update_all(last_worn: Date.today)
    # @articles.each { |article| article.last_worn = Date.today}

    # approach 2
    @outfit.articles.update_all(last_worn: Date.today)
    @articles = @outfit.articles

    render :show
  end

  private

  def outfit_params
    params.require(:outfit).permit(:temp_min, :temp_max, :rain, :clouds,
      :snow, :wind, :formality, :last_worn, :title, :notes, :articles)
  end

end
