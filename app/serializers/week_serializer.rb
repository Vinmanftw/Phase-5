class WeekSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :days
end
