json.articles do
  json.extract! @articles, :tops, :bottoms, :outerwear, :dresses, :shoes, :misc
end
