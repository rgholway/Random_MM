require 'rails_helper'

  RSpec.describe Api::V1::SongsController, type: :controller do
    before(:each) do
      Artist.create(name: "Mac Miller", short: "Mac", icon: "image", description: "A cool dude", first_letter: "m", second_letter: "m" )
      Album.create(title: "Faces", art: "image", short: "faces", artist_id: Artist.first.id)
      Album.create(title: "Watching Movies", art: "image", short: "movies", artist_id: Artist.first.id)
      Song.create(name: "Colors and Shapes", youtube: "url", album_id: Album.first.id)
      Song.create(name: "Avian", youtube: "url", album_id: Album.last.id)
      Song.create(name: "REMember", youtube: "url", album_id: Album.last.id)
    end

    it "returns JSON of a specific song" do
      id = Song.first.id
      post_json = {
        song: Song.find(id)
      }
      song = post_json[:song]
      expect(song.name).to eq("Colors and Shapes")
    end

    it "returns songs for a selected album" do
      id = Album.first.id
      songs = Album.last.songs
      expect(songs.count).to eq(2)
    end

  end
