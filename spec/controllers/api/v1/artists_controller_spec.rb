require 'rails_helper'

  RSpec.describe Api::V1::AlbumsController, type: :controller do
    before(:each) do
      Artist.create(name: "Mac Miller", short: "Mac", icon: "image", description: "A cool dude", first_letter: "m", second_letter: "m" )
      Artist.create(name: "Richee Fresh", short: "Rich", icon: "other_image", description: "me but I promise I don't rap that would be embarrasing", first_letter: "r", second_letter: "f")
    end

  it "returns JSON of all artists" do
    post_json = {
      body: Artist.all
    }
    count = post_json[:body].count
    expect(count).to eq(2)
  end

  it "returns a random artist" do
    artists = Artist.all
    random = artists.sample.short
    random == "Mac" || random == "Rich"
  end

end
