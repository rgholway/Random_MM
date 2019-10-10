require 'rails_helper'

  RSpec.describe Api::V1::AlbumsController, type: :controller do
    before(:each) do
      Artist.create(name: "Mac Miller", short: "Mac", icon: "image", description: "A cool dude", first_letter: "m", second_letter: "m" )
      Album.create(title: "Faces", art: "image", short: "faces", artist_id: Artist.first.id)
      Album.create(title: "Watching Movies", art: "image", short: "movies", artist_id: Artist.first.id)
      Song.create(name: "Colors and Shapes", youtube: "url", album_id: Album.first.id)
      Song.create(name: "Avian", youtube: "url", album_id: Album.last.id)
      Song.create(name: "REMember", youtube: "url", album_id: Album.last.id)
    end

    it "returns JSON of all albums for a selected artist" do
      post_json = {
        body: Album.all
      }
      count = post_json[:body].count
      expect(count).to eq(2)
    end

    it "returns JSON of a random song from a selected album" do
      id = Album.first.id
      song = Album.find(id).songs
      expect(song[0].name).to eq("Colors and Shapes")


    end

  end
