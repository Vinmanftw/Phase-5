class Day < ApplicationRecord
    validates :dotw, presence: true
    validates :routine_id, presence: true
    belongs_to :routine
    has_many :workouts
end
