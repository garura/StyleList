json.array! @outfits do |outfit|
  json.extract! outfit, :id, :temp_min, :temp_min, :rain, :clouds,
    :snow, :wind, :formality, :last_worn
  json.articles do
    json.array! outfit.articles do |article|
      json.extract! article, :title, :pic_url, :id, :article_type
    end
  end
end
