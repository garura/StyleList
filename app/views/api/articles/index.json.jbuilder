# Option 1
  # uses @user.articles_by_type, but shows all columns (is this actually a problem, though?)

json.articles do
  json.extract! @articles, :tops, :bottoms, :outerwear, :dresses, :shoes, :misc

end
json.user do
  json.extract! @user, :session_token
end



# Option 2
  # uses @user.articles_by_type, iterates through all articles twice
  # (articles_by_type and here...probably bad), but allows column filter

# json.articles do
#   @articles.each do |type, group|
#     json.set! type do
#       group.each do |id, item|
#         json.set! id do
#           json.extract! item, :title, :description, :pic_url, :color,
#             :temp_min, :temp_max, :formality, :last_worn, :brand, :rain,
#             :clouds, :snow, :wind
#         end
#       end
#     end
#   end
# end



# Option 3
  # uses @user.articles, iterates through all articles once (yay!),
  # allows column filter, but unelegant default declarations

# types = {
#   "top" => :tops,
#   "bottom" => :bottoms,
#   "outerwear" => :outerwear,
#   "dress" => :dresses,
#   "shoes" => :shoes,
#   "misc" => :misc
# }
#
# json.articles do
#   json.tops({})
#   json.bottoms({})
#   json.outerwear({})
#   json.dresses({})
#   json.shoes({})
#   json.misc({})
#   @articles.each do |article|
#     json.set! types[article.article_type] do
#       json.set! article.id do
#         json.extract! article, :title, :description, :pic_url, :color,
#           :temp_min, :temp_max, :formality, :last_worn, :brand, :rain,
#           :clouds, :snow, :wind
#       end
#     end
#   end
# end
