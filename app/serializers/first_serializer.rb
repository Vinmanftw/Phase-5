class FirstSerializer < ActiveModel::Serializer
  attributes :id, :first_name,:last_name,:is_male,:age,:username,:routines 
  def routines
    ActiveModel::SerializableResource.new(object.routines,each_serializer: SecondSerializer)
  end
end
