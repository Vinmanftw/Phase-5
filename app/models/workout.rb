class Workout < ApplicationRecord
    validates :name,uniqueness: true
    belongs_to :day
    has_many :workout_sets, dependent: :destroy
    accepts_nested_attributes_for :workout_sets, allow_destroy: true
end
