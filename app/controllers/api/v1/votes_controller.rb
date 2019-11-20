class Api::V1::VotesController < ApplicationController

  def index
    song = Song.find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    render json: song
  end


end
