class WorkoutListSerializer < ActiveModel::Serializer
  attributes :id, :name, :primary_muscle, :youtube_id, :video_start_time,:secondary_muscle_1,:secondary_muscle_2, :secondary_muscle_3, :secondary_muscle_4
  

end
