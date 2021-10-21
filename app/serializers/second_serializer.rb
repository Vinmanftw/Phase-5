class SecondSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :days
  def days
    ActiveModel::SerializableResource.new(object.days,
      each_serializer: ThirdSerializer)
  end
end
