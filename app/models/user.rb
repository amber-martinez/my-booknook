class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :books, through: :reviews

    validates :username, :password, :bio, :profile_pic_url, presence: true

    validates :username, uniqueness: true
    validates :username, length: { minimum: 6, maximum: 15 }

    validates :password, length: { minimum: 8, maximum: 30 }
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
    
    validates :bio, length: { maximum: 160 }

end
