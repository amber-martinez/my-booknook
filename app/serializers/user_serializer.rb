class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :profile_pic_url, :books
  has_many :reviews
  has_many :books, through: :reviews
end
