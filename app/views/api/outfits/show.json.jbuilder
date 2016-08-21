json.extract! @outfit, :id, :temp_min, :temp_min, :rain, :clouds,
  :snow, :wind, :formality, :last_worn
json.articles do
  json.array! @articles do |article|
    json.extract! article, :title, :pic_url, :id, :article_type
  end
end
