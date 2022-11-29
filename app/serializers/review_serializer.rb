class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_body, :user_id, :book_id
end
