class Api::V1::PlaylistsController < ApplicationController
protect_from_forgery unless: -> { request.format.json? }

  class Array
     def included_in? array
       array.to_set.superset?(self.to_set)
     end
  end

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
      num = rand(size)
      if !numbers.include?(num)
        numbers << num
        song = songs[num]
        playlist << [song.id, song.name, song.youtube]
      end
    end
    Playlist.create(title: "new", songs: playlist)
    render json: Playlist.last.id
  end

  def update
    selected_category = playlist_params[:_json]
    selected_playlist = Playlist.find(playlist_params[:id])
    playlist = Playlist.find(playlist_params[:id]).songs
    songs = Song.where(first_characteristic: selected_category)
    selected_songs = []
    numbers = []
    until selected_songs.length == 3 do
      num = rand(songs.size)
      if !numbers.include?(num)
        numbers << num
        selected_song = songs[num]
        if !playlist.include?([selected_song.id.to_s, selected_song.name, selected_song.youtube])
          selected_songs << [selected_song.id, selected_song.name, selected_song.youtube]
        end
      end
    end
    new_playlist = playlist + selected_songs
    selected_playlist.update(songs: new_playlist)
  end

  def playlist_params
    params.permit(:_json, :id)
  end

end
