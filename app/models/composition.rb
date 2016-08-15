class Composition < ActiveRecord::Base
  validates :outfit_id, :article_id, presence: true

  belongs_to :outfit
  belongs_to :article
end
