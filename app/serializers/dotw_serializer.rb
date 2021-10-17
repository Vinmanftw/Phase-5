class DotwSerializer < ActiveModel::Serializer
  attributes :id, :dotw, :title
  has_many :workouts
end
