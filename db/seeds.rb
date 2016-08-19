# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!(password: "123123", email: "hi", name: "chris", temp_offset: 0, zipcode: "94015")
Article.create!(user_id: user.id, article_type: "top", title: "top1", formality: 3, rain: true, clouds: true, snow: false, wind: true)
Article.create!(user_id: user.id, article_type: "bottom", title: "bottom1", formality: 4, rain: false, clouds: true, snow: false, wind: false)
Article.create!(user_id: user.id, article_type: "outerwear", title: "outerwear1", formality: 3, rain: true, clouds: true, snow: false, wind: true)
Article.create!(user_id: user.id, article_type: "top", title: "top2", formality: 1, rain: true, clouds: true, snow: false, wind: true)
Article.create!(user_id: user.id, article_type: "top", title: "top3", formality: 5, rain: true, clouds: true, snow: false, wind: true)
