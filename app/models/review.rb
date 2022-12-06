class Review < ApplicationRecord
    belongs_to :book
    belongs_to :user

    validates :book_id, :user_id, :rating, :review_body, presence: true
    validates :book_id, uniqueness: { scope: :user_id}
    validates :review_body, length: { minimum: 100, maximum: 4096 }
end
