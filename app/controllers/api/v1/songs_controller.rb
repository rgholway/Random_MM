class Api::V1::SongsController < ApplicationController

  def index
    num = 1 + rand(3)
    render json: Song.find(num)
  end

  def show
    album = Album.find(params[:id])
    songs = album.songs
    render json: songs
  end


end
