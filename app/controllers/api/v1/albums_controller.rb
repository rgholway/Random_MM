class Api::V1::AlbumsController < ApplicationController

  def index
    render json: Album.all
  end

  def show
    album = Album.find(params["id"])
    songs = album.songs
    selected_song = songs.sample
    render json: selected_song
  end

end
