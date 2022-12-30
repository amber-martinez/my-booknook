class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image_url, :genre, :average_rating

  has_many :reviews
  has_many :users, through: :reviews

end
