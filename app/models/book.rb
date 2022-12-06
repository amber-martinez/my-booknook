class Book < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, :author, :genre, :image_url, presence: true
    validates :title, uniqueness: true
    
end
