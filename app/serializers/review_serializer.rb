class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_body, :book, :user

  belongs_to :book
  belongs_to :user
end
