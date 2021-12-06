class PuppySerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :image
end
