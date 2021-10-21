class Workout < ApplicationRecord
    
    validates :name,uniqueness: true
    belongs_to :day
    has_many :workout_sets
end
