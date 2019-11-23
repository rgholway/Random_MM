class Api::V1::PlaylistsController < ApplicationController
protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def create
    category = playlist_params[:_json]
    selected_songs = Song.where(first_characteristic: category)
    Playlist.create(title: "new", songs: [selected_songs])
  end

  def playlist_params
    params.permit(:_json)
  end

end
