class Outfit < ActiveRecord::Base
  has_many :compositions
  has_many :articles, through: :compositions
end
