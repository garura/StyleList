class Api::ArticlesController < ApplicationController

  def index
    if current_user
      @articles = current_user.articles
      render :index
    else
      render json: { errors: "not logged in" }
    end
  end

  def show
    @article = Article.find(params[:article][:id])
    if @article
      render :show
    else
      render json: { errors: "Article not found" }, status: 404
    end
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render :show
    else
      render json: { errors: @article.errors.full_messages }, status: 422
    end
  end

  def update
    # grab id from params? will depend on route
    @article = Article.find(params[:article][:id]) # ??
    render json: { errors: "Article not found" }, status: 404 unless @article # is this the correct way to write this?
    if @article.update(article_params)
      render :show
    else
      render json: { errors: "Invalid article attributes" }, status: 422
    end
  end

  def destroy
    article = Article.find(params[:article][:id])
    if article && article.delete
      render json: { destroyed: true } # redundant?
    else
      render json: { errors: "Article not found" }, status: 404
    end
  end



  private

  def article_params
    params.require(:article).permit(:user_id, :article_type, :title,
      :description, :pic_url, :color, :temp_min, :temp_max, :formality,
      :last_worn, :brand, :rain, :clouds, :snow, :wind)
  end

end
