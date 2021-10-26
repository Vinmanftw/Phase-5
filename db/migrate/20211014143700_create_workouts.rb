class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :primary_muscle
      t.string :youtube_id
      t.integer :video_start_time
      t.string :secondary_muscle_1
      t.string :secondary_muscle_2
      t.string :secondary_muscle_3
      t.string :secondary_muscle_4
      t.belongs_to :day
      t.timestamps
    end
  end
end
