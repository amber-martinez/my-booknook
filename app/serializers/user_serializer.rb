class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :profile_pic_url, :books, :reviews
end
