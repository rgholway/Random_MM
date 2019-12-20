class Api::V1::VotesController < ApplicationController

  def index
    songs = []
    song1 = Song.where(first_characteristic: "sad" )
    songs << song1[rand(song1.length)]
    song2 = Song.where(first_characteristic: "funky")
    songs << song2[rand(song2.length)]
    song3 = Song.where(first_characteristic: "upbeat")
    songs << song3[rand(song3.length)]
    song4 = Song.where(first_characteristic: "downer")
    songs << song4[rand(song4.length)]
    song5 = Song.where(first_characteristic: "trippy")
    songs << song5[rand(song5.length)]
    render json: songs
  end


end
