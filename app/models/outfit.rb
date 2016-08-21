class Outfit < ActiveRecord::Base
  #add validations
  has_many :compositions
  has_many :articles, through: :compositions

  def save_compositions(article_ids)
    if article_ids
      compositions = article_ids.map do |article_id|
        Composition.new(outfit_id: self.id, article_id: article_id.to_i)
      end

      Composition.transaction do
        compositions.each do |comp|
          comp.save
        end
      end
    end
  end

end
