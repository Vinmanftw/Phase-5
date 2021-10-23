class Day < ApplicationRecord
    validates :dotw, presence: true
    validates :routine_id, presence: true
    belongs_to :routine
    has_many :workouts
    accepts_nested_attributes_for :workouts, allow_destroy: true
end
