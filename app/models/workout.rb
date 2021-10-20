class Workout < ApplicationRecord
    belongs_to :day
    has_many :workout_sets
end
