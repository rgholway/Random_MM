class Api::V1::ArtistsController < ApplicationController

  def show
    artist = Artist.find_by(short: params["id"])
    albums = artist.albums
    artist_name = artist.name.upcase
    render json: [albums, artist, artist_name]
  end

end