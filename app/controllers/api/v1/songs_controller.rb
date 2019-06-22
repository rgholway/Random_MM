class Api::V1::SongsController < ApplicationController

  def index
    render json: Song.find(params[:id])
  end

  def show
    album = Album.find(params[:id])
    songs = album.songs.reverse
    render json: songs
  end


end
