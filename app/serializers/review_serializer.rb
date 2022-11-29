class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_body, :user, :book
end
