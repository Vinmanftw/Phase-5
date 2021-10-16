class Workout < ApplicationRecord
    validates :day_id, presence: true
    belongs_to :day
    has_many :workout_sets
end
