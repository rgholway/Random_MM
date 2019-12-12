class Api::V1::PlaylistsController < ApplicationController
protect_from_forgery unless: -> { request.format.json? }

  def show
    playlist = Playlist.find(params[:id])
    render json: playlist.songs
  end

  def create
    category = playlist_params[:_json]
    playlist = []
    selected_songs = Song.where(first_characteristic: category)
    selected_songs.each do |song|
      playlist << [song.id, song.name, song.youtube]
    end
    Playlist.create(title: "new", songs: playlist)
  end

  def playlist_params
    params.permit(:_json)
  end

end
