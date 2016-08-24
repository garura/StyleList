class Api::ArticlesController < ApplicationController

  before_action :require_logged_in

  def index
    @user = current_user
    @articles = @user.articles_by_type
    # @articles = user.articles
    render :index
  end

  def show
    @article = Article.find_by_id(params[:id])
    if @article && @article.user_id == current_user.id
      render :show
    else
      render json: { errors: "Article not found" }, status: 404
    end
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = current_user.id
    if @article.save
      render :show
    else
      render json: { errors: @article.errors.full_messages }, status: 422
    end
  end

  def update
    @article = Article.find_by_id(params[:id])
    if @article.nil? || @article.user_id != current_user.id
      render json: { errors: "Article not found" }, status: 404
    elsif @article.update(article_params)
      render :show
    else
      render json: { errors: "Invalid article attributes" }, status: 422
    end
  end

  def destroy
    article = Article.find_by_id(params[:id])
    if article && article.user_id == current_user.id
      article.delete
      render json: { destroyed: true } # redundant?
    else
      render json: { errors: "Article not found" }, status: 404
    end
  end



  private

  def article_params
    params.require(:article).permit(:article_type, :title,
      :description, :pic_url, :color, :temp_min, :temp_max, :formality,
      :last_worn, :brand, :rain, :clouds, :snow, :wind)
  end

end
