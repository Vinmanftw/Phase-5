class Routine < ApplicationRecord
    validates :user_id, presence: true
    belongs_to :user
    has_many :days
end
