class Host < ApplicationRecord
    belongs_to :wedding
    has_many :guests, through: :weddings
    has_many :pictures
end
