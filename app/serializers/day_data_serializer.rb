class DayDataSerializer < ActiveModel::Serializer
  attributes :id, :dotw,:title,:routine_id, :workouts 
  def workouts
    ActiveModel::SerializableResource.new(object.workouts,
        each_serializer: WorkoutDataSerializer)
  end
end
