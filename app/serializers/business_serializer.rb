class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :avg_score

  has_many :reviews
end
