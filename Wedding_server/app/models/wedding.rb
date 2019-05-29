class Wedding < ApplicationRecord
    has_many :guests
    has_many :hosts 
    has_many :events
end
