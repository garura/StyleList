class Article < ActiveRecord::Base

  BOOLEAN_VALUES = [true, false]
  ARTICLE_TYPES = ["top", "bottom", "outerwear", "shoes", "dress", "misc"]
  COLORS = ["red", "orange", "yellow", "green", "blue", "purple",
    "black", "grey", "denim", "pink", "white", "brown", "patterned"]

  validates :user_id, :article_type, :title, :temp_min, :temp_max, :formality, presence: true
  validates :rain, :clouds, :snow, :wind, inclusion: BOOLEAN_VALUES
  validates :article_type, inclusion: ARTICLE_TYPES
  validates :color, inclusion: { in: COLORS }, allow_nil: true
  validate :valid_temp_range
  validate :valid_formality_range

  belongs_to :user
  has_many :compositions
  has_many :outfits, through: :compositions


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
    unless formality.between?(1,10)
      errors[:formality] << "Invalid formality input"
    end
  end

end
