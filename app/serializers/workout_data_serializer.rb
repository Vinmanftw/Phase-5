class WorkoutDataSerializer < ActiveModel::Serializer
  attributes :id,:name,:day_id ,:primary_muscle, :youtube_id, :video_start_time,:secondary_muscle_1,:secondary_muscle_2, :secondary_muscle_3, :secondary_muscle_4, :sets
  def sets
    ActiveModel::SerializableResource.new(object.workout_sets,
        each_serializer: SetDataSerializer)
  end
end
