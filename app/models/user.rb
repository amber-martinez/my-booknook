class User < ApplicationRecord
    has_secure_password
    # has_many_attached :files

    has_many :reviews, dependent: :destroy
    has_many :books, through: :reviews

    validates :username, :password_digest, :bio, :profile_pic_url, presence: true, on: :create

    validates :username, uniqueness: true, on: :create
    validates :username, length: { minimum: 6, maximum: 30 }

    validates :password_digest, length: { minimum: 8 }, on: :create
    # validates :password_digest, confirmation: true, on: :create
    # validates :password_confirmation, presence: true, on: :create
    
    validates :bio, length: { maximum: 160 }

end
