class Routine < ApplicationRecord
    validates :user_id, presence: true
    belongs_to :user
    has_many :days
    accepts_nested_attributes_for :days, allow_destroy: true
end
