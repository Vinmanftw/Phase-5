class CreateWorkoutSets < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_sets do |t|
      t.integer :reps
      t.integer :prior_weight
      t.belongs_to :workout
      t.timestamps
    end
  end
end
