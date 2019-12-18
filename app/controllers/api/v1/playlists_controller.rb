class Api::V1::PlaylistsController < ApplicationController
protect_from_forgery unless: -> { request.format.json? }

  def show
    playlist = Playlist.find(params[:id])
    render json: playlist.songs
  end

  def create
    favorite_album = playlist_params[:_json]
    playlist = []
    selected_album = Album.where(title: favorite_album)
    songs = selected_album.first.songs
    size = songs.length
    numbers = []
    until playlist.length == 6 do
      num = rand(size + 1)
      if !numbers.include?(num)
        numbers << num
        song = songs[num]
        playlist << [song.id, song.name, song.youtube]
      end
    end
    Playlist.create(title: "new", songs: playlist)
  end

  def playlist_params
    params.permit(:_json)
  end

end
