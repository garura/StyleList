class Outfit < ActiveRecord::Base
  #add validations
  has_many :compositions
  has_many :articles, through: :compositions
end
