class Guest < ApplicationRecord
    belongs_to :wedding
    has_many :hosts, through: :weddings
end
