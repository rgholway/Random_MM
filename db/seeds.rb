Album.create(title: "Swimming", art: "https://media.pitchfork.com/photos/5929a7d7ea9e61561daa56a2/1:1/w_600/85c259af.jpghttps://media.pitchfork.com/photos/5b4e36a4dc6c142e533571c8/1:1/w_600/Mac%20Miller_Swimming.jpg")
Album.create(title: "Faces", art: "https://media.pitchfork.com/photos/5929a7d7ea9e61561daa56a2/1:1/w_600/85c259af.jpg")
Album.create(title: "Watching Movies with the Sound Off", art: "https://assets.capitalxtra.com/2013/48/best-hip-hop-album-covers-6-1386002950-view-0.jpg")
Album.create(title: "Go:od AM", art: "https://i2.wp.com/www.parlemag.com/wp-content/uploads/2015/08/Mac-Miller-GOOD-AM.jpg?fit=684%2C684&ssl=1")
Album.create(title: "The Divine Feminine", art: "https://media.pitchfork.com/photos/5929bcb3ea9e61561daa752c/1:1/w_600/178c182f.jpg")
Album.create(title: "Blue Slide Park", art: "https://images.genius.com/ab260470b208b8984a74e2e42e7d1ff6.600x600x1.jpg")
Album.create(title: "K.I.D.S", art: "https://cdn.shopify.com/s/files/1/0807/4553/products/s-l1600-1_883370e4-02dc-4b8a-8986-22a9bcfe00fa_grande.jpg?v=1544759626")
Album.create(title: "Delusional Thomas", art: "http://hw-img.datpiff.com/m9019023/Mac_Miller_Delusional_Thomas-front-large.jpg")
Album.create(title: "Macadelic", art: "https://ssla.ulximg.com/image/750x750/cover/1332543471_fcbecdd3c7f506b3e7861654c8153f07.jpg/06a0fb870fc8d7c46f60cb31ddd8297e/1332543471_mac_miller_macadelic.jpg")
Album.create(title: "Live From Space", art: "http://images.genius.com/932f12c26d028188907e55cf5ff23f3e.600x600x1.jpg")
Album.create(title: "Best Day Ever", art: "https://cps-static.rovicorp.com/3/JPG_500/MI0004/067/MI0004067757.jpg?partner=allrovi.com")

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

wmwtso_songs = [
  {name: "Aquarium", youtube: "R_me4SNmGbc", album_id: 3}
]

wmwtso_songs.each do |song|
  Song.create(song)
end

am_songs = [
  {name: "Ascension", youtube: "8RUbM_WSYTI", album_id: 4}
]

am_songs.each do |song|
  Song.create(song)
end

divine_songs = [
  {name: "We", youtube: "XL--KSNxfy8", album_id: 5}
]

divine_songs.each do |song|
  Song.create(song)
end

blue_songs = [
  {name: "Frick Park Market", youtube: "KJ19PJ7-SWc", album_id: 6}
]

blue_songs.each do |song|
  Song.create(song)
end

kids_songs = [
  {name: "Knock Knock", youtube: "6bMmhKz6KXg", album_id: 7}
]

kids_songs.each do |song|
  Song.create(song)
end

delusional_songs = [
  {name: "Larry", youtube: "fxopeGFFw0I", album_id: 8}
]

delusional_songs.each do |song|
  Song.create(song)
end

macadelic_songs = [
  {name: "Clarity", youtube: "6CJ4odoWNSs", album_id: 9}
]

macadelic_songs.each do |song|
  Song.create(song)
end

space_songs = [
  {name: "Clarity", youtube: "p2Ic55PW1Dc", album_id: 10}
]

space_songs.each do |song|
  Song.create(song)
end

best_songs = [
  {name: "Best Day Ever", youtube: "AbV-Q6tz4B8", album_id: 11}
]

best_songs.each do |song|
  Song.create(song)
end
