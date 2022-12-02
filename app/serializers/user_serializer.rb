class UserSerializer < ActiveModel::Serializer
  attributes :username, :bio, :profile_pic_url, :books, :reviews
end
