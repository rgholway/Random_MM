class Api::V1::SongsController < ApplicationController

  def index
    num = 1 + rand(3)
    render json: Song.find(num)
  end

end
