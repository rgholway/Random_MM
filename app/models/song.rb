class Song < ApplicationRecord
  validates_presence_of :name, :youtube
  
end
