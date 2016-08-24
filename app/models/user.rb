class User < ActiveRecord::Base
  attr_reader :password

  TEMP_OFFSETS = [-5, 0, 5]

  validates :email, :name, :temp_offset, :zipcode, :session_token, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :temp_offset, inclusion: TEMP_OFFSETS
  validates :zipcode, zipcode: { country_code: :us }

  has_many :articles, dependent: :destroy
  has_many :outfits, dependent: :destroy

  after_initialize :ensure_session_token

  ARTICLE_TYPES = {
    "top" => :tops,
    "bottom" => :bottoms,
    "outerwear" => :outerwear,
    "dress" => :dresses,
    "shoes" => :shoes,
    "misc" => :misc
  }

  def articles_by_type
    group = Hash.new
    ARTICLE_TYPES.each do |_, type|
      group[type] = {count: 0}
    end
    self.articles.each do |article|
      group[ARTICLE_TYPES[article.article_type]][article.id] = article
      group[ARTICLE_TYPES[article.article_type]][:count] += 1
    end
    group
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
