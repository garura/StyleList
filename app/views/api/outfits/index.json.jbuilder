json.outfits do
  @outfits.each do |outfit|
    json.set! outfit.id do
      json.extract! outfit, :id, :temp_min, :temp_max, :rain, :clouds,
      :snow, :wind, :formality, :last_worn
      json.articles do
        json.array! outfit.articles do |article|
          json.extract! article, :title, :pic_url, :id, :article_type
        end
      end
    end
  end
  json.ids @ids
end
