# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!(password: "123123", email: "hi", name: "chris", temp_offset: 0, zipcode: "94015")
#TOPS
t1 = Article.create!(user_id: user.id, article_type: "top", title: "Atmosphere concert T-shirt", color: 'black', formality: 1, rain: true, clouds: true, snow: false, wind: true)
t2 = Article.create!(user_id: user.id, article_type: "top", title: "top2", color: 'red', formality: 2, rain: false, clouds: true, snow: false, wind: false)
t3 = Article.create!(user_id: user.id, article_type: "top", title: "top3", color: 'green', formality: 3, rain: false, clouds: true, snow: false, wind: true)
t4 = Article.create!(user_id: user.id, article_type: "top", title: "top4", color: 'blue', formality: 4, rain: false, clouds: true, snow: false, wind: false)
t5 = Article.create!(user_id: user.id, article_type: "top", title: "top5", color: 'patterned', formality: 5, rain: false, clouds: true, snow: false, wind: true)
t6 = Article.create!(user_id: user.id, article_type: "top", title: "top6", color: 'white', formality: 2, rain: true, clouds: true, snow: false, wind: true)
t7 = Article.create!(user_id: user.id, article_type: "top", title: "top7", color: 'grey', formality: 4, rain: true, clouds: true, snow: false, wind: true)
t8 = Article.create!(user_id: user.id, article_type: "top", title: "top8", color: 'black', formality: 5, rain: true, clouds: true, snow: false, wind: true)
#BOTTOMS
b1 = Article.create!(user_id: user.id, article_type: "bottom", title: "bottom1", color: 'denim', formality: 1, rain: false, clouds: true, snow: false, wind: false)
b2 = Article.create!(user_id: user.id, article_type: "bottom", title: "bottom2", color: 'denim', formality: 2, rain: false, clouds: true, snow: false, wind: false)
b3 = Article.create!(user_id: user.id, article_type: "bottom", title: "bottom3", color: 'denim', formality: 3, rain: false, clouds: true, snow: false, wind: false)
b4 = Article.create!(user_id: user.id, article_type: "bottom", title: "bottom4", color: 'white', formality: 4, rain: false, clouds: true, snow: false, wind: false)
b5 = Article.create!(user_id: user.id, article_type: "bottom", title: "bottom5", color: 'patterned', formality: 3, rain: false, clouds: true, snow: false, wind: false)
b6 = Article.create!(user_id: user.id, article_type: "bottom", title: "bottom6", color: 'black',formality: 5, rain: false, clouds: true, snow: false, wind: false)
#OUTERWEAR
o1 = Article.create!(user_id: user.id, article_type: "outerwear", title: "outerwear1", color: 'denim', formality: 3, rain: false, clouds: true, snow: false, wind: true)
o2 = Article.create!(user_id: user.id, article_type: "outerwear", title: "outerwear2", color: 'black', formality: 4, rain: false, clouds: true, snow: false, wind: false)
o3 = Article.create!(user_id: user.id, article_type: "outerwear", title: "outerwear3", color: 'patterned', formality: 5, rain: true, clouds: true, snow: true, wind: true)
o4 = Article.create!(user_id: user.id, article_type: "outerwear", title: "outerwear4", color: 'grey', formality: 1, rain: true, clouds: true, snow: false, wind: true)
#DRESSES
d1 = Article.create!(user_id: user.id, article_type: "dress", title: "dress1", color: 'patterned', formality: 2, rain: false, clouds: true, snow: false, wind: false)
d2 = Article.create!(user_id: user.id, article_type: "dress", title: "dress2", color: 'black', formality: 5, rain: false, clouds: true, snow: false, wind: false)
d3 = Article.create!(user_id: user.id, article_type: "dress", title: "dress3", color: 'red', formality: 4, rain: false, clouds: true, snow: false, wind: false)
#SHOES
s1 = Article.create!(user_id: user.id, article_type: "shoes", title: "shoes1", formality: 1, color: 'black', rain: false, clouds: true, snow: false, wind: false)
s2 = Article.create!(user_id: user.id, article_type: "shoes", title: "shoes2", formality: 5, color: 'white', rain: true, clouds: true, snow: false, wind: true)
s3 = Article.create!(user_id: user.id, article_type: "shoes", title: "shoes3", formality: 5, color: 'brown', rain: false, clouds: true, snow: false, wind: true)


#TOPS/BOTTOMS/OUTERWEAR/SHOES
outfit1 = Outfit.create!(user_id: user.id, rain: true, clouds: true, snow: false, wind: false, formality: 1)
Composition.create!(outfit_id: outfit1.id, article_id: t1.id)
Composition.create!(outfit_id: outfit1.id, article_id: b1.id)
Composition.create!(outfit_id: outfit1.id, article_id: o1.id)
Composition.create!(outfit_id: outfit1.id, article_id: s1.id)

outfit2 = Outfit.create!(user_id: user.id, rain: true, clouds: true, snow: false, wind: false, formality: 2)
Composition.create!(outfit_id: outfit2.id, article_id: t2.id)
Composition.create!(outfit_id: outfit2.id, article_id: b1.id)
Composition.create!(outfit_id: outfit2.id, article_id: o1.id)
Composition.create!(outfit_id: outfit2.id, article_id: s1.id)

outfit3 = Outfit.create!(user_id: user.id, rain: true, clouds: true, snow: false, wind: false, formality: 3)
Composition.create!(outfit_id: outfit3.id, article_id: t3.id)
Composition.create!(outfit_id: outfit3.id, article_id: b2.id)
Composition.create!(outfit_id: outfit3.id, article_id: o2.id)
Composition.create!(outfit_id: outfit3.id, article_id: s1.id)

outfit4 = Outfit.create!(user_id: user.id, rain: true, clouds: true, snow: false, wind: false, formality: 4)
Composition.create!(outfit_id: outfit4.id, article_id: t4.id)
Composition.create!(outfit_id: outfit4.id, article_id: b3.id)
Composition.create!(outfit_id: outfit4.id, article_id: o2.id)
Composition.create!(outfit_id: outfit4.id, article_id: s2.id)

outfit5 = Outfit.create!(user_id: user.id, rain: true, clouds: true, snow: false, wind: false, formality: 1)
Composition.create!(outfit_id: outfit5.id, article_id: t5.id)
Composition.create!(outfit_id: outfit5.id, article_id: b4.id)
Composition.create!(outfit_id: outfit5.id, article_id: o3.id)
Composition.create!(outfit_id: outfit5.id, article_id: s2.id)

outfit6 = Outfit.create!(user_id: user.id, rain: true, clouds: true, snow: false, wind: false, formality: 2)
Composition.create!(outfit_id: outfit6.id, article_id: t6.id)
Composition.create!(outfit_id: outfit6.id, article_id: b5.id)
Composition.create!(outfit_id: outfit6.id, article_id: o3.id)
Composition.create!(outfit_id: outfit6.id, article_id: s2.id)

outfit7 = Outfit.create!(user_id: user.id, rain: true, clouds: true, snow: false, wind: false, formality: 4)
Composition.create!(outfit_id: outfit7.id, article_id: t7.id)
Composition.create!(outfit_id: outfit7.id, article_id: b5.id)
Composition.create!(outfit_id: outfit7.id, article_id: o4.id)
Composition.create!(outfit_id: outfit7.id, article_id: s2.id)

outfit8 = Outfit.create!(user_id: user.id, rain: true, clouds: true, snow: false, wind: false, formality: 5)
Composition.create!(outfit_id: outfit8.id, article_id: t8.id)
Composition.create!(outfit_id: outfit8.id, article_id: b6.id)
Composition.create!(outfit_id: outfit8.id, article_id: o4.id)
Composition.create!(outfit_id: outfit8.id, article_id: s3.id)

#DRESSES/SHOES
outfit9 = Outfit.create!(user_id: user.id, rain: false, clouds: false, snow: false, wind: false, formality: 2)
Composition.create!(outfit_id: outfit9.id, article_id: d1.id)
Composition.create!(outfit_id: outfit9.id, article_id: s1.id)

outfit10 = Outfit.create!(user_id: user.id, rain: false, clouds: true, snow: false, wind: false, formality: 5)
Composition.create!(outfit_id: outfit10.id, article_id: d2.id)
Composition.create!(outfit_id: outfit10.id, article_id: s2.id)

outfit11 = Outfit.create!(user_id: user.id, rain: true, clouds: true, snow: false, wind: true, formality: 4)
Composition.create!(outfit_id: outfit11.id, article_id: d3.id)
Composition.create!(outfit_id: outfit11.id, article_id: s3.id)
