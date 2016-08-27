class Outfit < ActiveRecord::Base

  BOOLEAN_VALUES = [true, false]
  validates :user_id, :temp_min, :temp_max, :title, :formality, presence: true
  validates :rain, :clouds, :snow, :wind, inclusion: BOOLEAN_VALUES
  validate :valid_temp_range
  validate :valid_formality_range

  before_create :set_title

  has_many :compositions
  has_many :articles, through: :compositions

  def save_compositions(article_ids)
    if article_ids
      compositions = article_ids.uniq.map do |article_id|
        Composition.new(outfit_id: self.id, article_id: article_id.to_i)
      end

      Composition.transaction do
        compositions.each do |comp|
          comp.save
        end
      end
    end
  end

  private

  def valid_temp_range
    unless temp_min.between?(1,5)
      errors[:temp_min] << "Invalid minimum temperature"
    end
    unless temp_max.between?(1,5)
      errors[:temp_max] << "Invalid maximum temperature"
    end
    if temp_min > temp_max
     errors[:temp_range] << "Maximum temperature cannot be lower than minimum temperature"
    end
  end

  def valid_formality_range
    unless formality.between?(1,5)
      errors[:formality] << "Invalid formality input"
    end
  end

  def set_title
    if self.title == "#OOTD"
      self.title = "#OOTD #{Date.today.to_formatted_s(:long)}"
    end
  end

end
