class SchedualSerializer < ActiveModel::Serializer
  attributes :id,:first_name,:last_name,:is_male,:age,:username 
  has_many :routines
end
