class Album < ApplicationRecord
  validates_presence_of :title

  has_many :songs
end
