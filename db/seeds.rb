Album.create(title: "Swimming", art: "https://media.pitchfork.com/photos/5929a7d7ea9e61561daa56a2/1:1/w_600/85c259af.jpghttps://media.pitchfork.com/photos/5b4e36a4dc6c142e533571c8/1:1/w_600/Mac%20Miller_Swimming.jpg")
Album.create(title: "Faces", art: "https://media.pitchfork.com/photos/5929a7d7ea9e61561daa56a2/1:1/w_600/85c259af.jpg")
Album.create(title: "Watching Movies with the Sound Off", art: "https://assets.capitalxtra.com/2013/48/best-hip-hop-album-covers-6-1386002950-view-0.jpg")
Album.create(title: "Go:od AM", art: "https://i2.wp.com/www.parlemag.com/wp-content/uploads/2015/08/Mac-Miller-GOOD-AM.jpg?fit=684%2C684&ssl=1")


swimming_songs = [
  {name: "Come Back to Earth", youtube: "W4ocPPhtglU", album_id: 1},
  {name: "Hurt Feelings", youtube: "WGzhlLCdAVo", album_id: 1},
  {name: "What's the Use?", youtube: "qI-t1I_ppL8", album_id: 1},
  {name: "Perfecto", youtube: "XbSuMV7ghm8", album_id: 1},
  {name: "Self Care", youtube: "SsKT0s5J8ko", album_id: 1},
  {name: "Wings", youtube: "_O1qD95xnao", album_id: 1},
  {name: "Ladders", youtube: "0gzmFo8UiJQ", album_id: 1},
  {name: "Small Worlds", youtube: "nHc_7yeiLvc", album_id: 1},
  {name: "Conversation Pt. 1", youtube: "7YcXhpgHwvI", album_id: 1},
  {name: "Dunno", youtube: "61Lmk2k542k", album_id: 1},
  {name: "Jet Fuel", youtube: "OnG7oL9Gg4o", album_id: 1},
  {name: "2009", youtube: "6B3YwcjQ_bU", album_id: 1},
  {name: "So it Goes", youtube: "Uf24Uk6ZMLQ", album_id: 1}
]

swimming_songs.each do |song|
  Song.create(song)
end

faces_songs = [
  {name: "Colors and Shapes", youtube: "8P5Hx3xXYqw", album_id: 2},
  {name: "New Faces", youtube: "fuJPkQkhwn8", album_id: 2}
]

faces_songs.each do |song|
  Song.create(song)
end
