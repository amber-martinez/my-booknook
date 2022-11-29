class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :bio, :profile_pic_url
end
