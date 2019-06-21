Album.create(title: "Swimming", short: "swimming", art: "http://www.getalternative.com/wp-content/uploads/2018/12/mac-miller-self-care-video-reveals-cover-art-tracklist-swimming-album.jpg")
Album.create(title: "Faces", short: "faces", art: "https://media.pitchfork.com/photos/5929a7d7ea9e61561daa56a2/1:1/w_600/85c259af.jpg")
Album.create(title: "WMWTSO", short: "wmtso", art: "https://images.genius.com/c2c579aaf2e5c37b2a5dd74193bb0cdd.600x600x1.jpg")
Album.create(title: "Go:od AM", short: "good__am", art: "https://i2.wp.com/www.parlemag.com/wp-content/uploads/2015/08/Mac-Miller-GOOD-AM.jpg?fit=684%2C684&ssl=1")
Album.create(title: "Divine Feminine", short: "divine", art: "https://media.pitchfork.com/photos/5929bcb3ea9e61561daa752c/1:1/w_600/178c182f.jpg")
Album.create(title: "Blue Slide Park", short: "blue", art: "https://images.genius.com/ab260470b208b8984a74e2e42e7d1ff6.600x600x1.jpg")
Album.create(title: "K.I.D.S", short: "kids", art: "https://cdn.shopify.com/s/files/1/0807/4553/products/s-l1600-1_883370e4-02dc-4b8a-8986-22a9bcfe00fa_grande.jpg?v=1544759626")
Album.create(title: "Delusional Thomas", short: "delusional", art: "http://hw-img.datpiff.com/m9019023/Mac_Miller_Delusional_Thomas-front-large.jpg")
Album.create(title: "Macadelic", short: "macadelic", art: "https://ssla.ulximg.com/image/750x750/cover/1332543471_fcbecdd3c7f506b3e7861654c8153f07.jpg/06a0fb870fc8d7c46f60cb31ddd8297e/1332543471_mac_miller_macadelic.jpg")
Album.create(title: "Live From Space", short: "space", art: "http://images.genius.com/932f12c26d028188907e55cf5ff23f3e.600x600x1.jpg")
Album.create(title: "Best Day Ever", short: "bde", art: "https://cps-static.rovicorp.com/3/JPG_500/MI0004/067/MI0004067757.jpg?partner=allrovi.com")
Album.create(title: "Run on Sentences", short: "v1", art: "https://ssla.ulximg.com/image/750x750/cover/1362407226_b378446d8c5acfc033c85e8662022663.jpg/54af3da11b8c521d4244cf9ef9d30f7d/1362407226_abc57058448d2a15b4159a5d07b228c6.jpg")
Album.create(title: "Everything Else", short: "everything", art: "https://pbs.twimg.com/profile_images/1035265948192653312/4WYg4YiA.jpg")
Album.create(title: "Stolen Youth", short: "stolen", art: "https://earmilk-com.exactdn.com/wp-content/uploads/2013/07/Vince_Staples_Larry_Fisherman_Stolen_Youth-front-large.jpg?strip=all&lossy=1&ssl=1")

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
  {name: "Here We Go", youtube: "v19YY2r-HMA", album_id: 2},
  {name: "Inside Outside", youtube: "7i-OZkxv9uQ", album_id: 2},
  {name: "Friends", youtube: "7i-MT7YdS64thw", album_id: 2},
  {name: "Angel Dust", youtube: "rIQqzTNRmoc", album_id: 2},
  {name: "Malibu", youtube: "zlHUpGHJSR0", album_id: 2},
  {name: "What Do You Do", youtube: "mmeo85zjZlo", album_id: 2},
  {name: "It Just Doesn't Matter", youtube: "8Zrd6QSwgE8", album_id: 2},
  {name: "Therapy", youtube: "ts0I8YY30Rk", album_id: 2},
  {name: "Polo Jeans", youtube: "0o-6n5IiVY0", album_id: 2},
  {name: "Happy Birthday", youtube: "s8_f4Sj5qzk", album_id: 2},
  {name: "Wedding", youtube: "x3elAONl3jY", album_id: 2},
  {name: "Funeral", youtube: "k8gQZ60u2jg", album_id: 2},
  {name: "Diablo", youtube: "KlQESTshOPw", album_id: 2},
  {name: "Ave Maria", youtube: "j2dXGVFT9fg", album_id: 2},
  {name: "55", youtube: "7pjyOg-3_RM", album_id: 2},
  {name: "San Francisco", youtube: "jR_WuiY6-Sg", album_id: 2},
  {name: "Colors and Shapes", youtube: "8P5Hx3xXYqw", album_id: 2},
  {name: "Insomiak", youtube: "VywJsq4YXfA", album_id: 2},
  {name: "Uber", youtube: "Zn9CMLebeuc", album_id: 2},
  {name: "Rain", youtube: "DmmVy2bWlgM", album_id: 2},
  {name: "Apparition", youtube: "J7iMyLl987w", album_id: 2},
  {name: "Thumbalina", youtube: "QxHWGjXmf0s", album_id: 2},
  {name: "New Faces", youtube: "fuJPkQkhwn8", album_id: 2},
  {name: "Grand Finale", youtube: "O8QJYVG1cpI", album_id: 2}
]

faces_songs.each do |song|
  Song.create(song)
end

wmwtso_songs = [
  {name: "The Star Room", youtube: "Mos8UiWV6_g", album_id: 3},
  {name: "Avian", youtube: "mFWf4Tb5m6Y", album_id: 3},
  {name: "I'm Not Real", youtube: "GDLFo600vvg", album_id: 3},
  {name: "SDS", youtube: "jj4csT4eviU", album_id: 3},
  {name: "Bird Call", youtube: "qGnXnLAXO8c", album_id: 3},
  {name: "Matches", youtube: "VfSgvNs3irw", album_id: 3},
  {name: "I Am Who I Am", youtube: "jLTOuvBTLxA", album_id: 3},
  {name: "Objects in the Mirror", youtube: "fG9C7Bo2vzU", album_id: 3},
  {name: "Red Dot Music", youtube: "LD6SbTFy8vs", album_id: 3},
  {name: "Gees", youtube: "1JGmTalfUQY", album_id: 3},
  {name: "Watching Movies", youtube: "wdaI7F3Jv5M", album_id: 3},
  {name: "Suplexes inside of Complexes and Duplexes", youtube: "fJo-Cjq0yjg", album_id: 3},
  {name: "Remember", youtube: "u7MrdaSYvo0", album_id: 3},
  {name: "Someone Like You", youtube: "e9iS7zaUeQo", album_id: 3},
  {name: "Aquarium", youtube: "R_me4SNmGbc", album_id: 3},
  {name: "Youforia", youtube: "lMjQGOfpSo4", album_id: 3},
  {name: "Goosebumpz", youtube: "M-ev8TFGhGI", album_id: 3},
  {name: "O.K.", youtube: "eXbz4nSnWf8", album_id: 3},
  {name: "Claymation.", youtube: "qF22BW168tw", album_id: 3}
]

wmwtso_songs.each do |song|
  Song.create(song)
end

am_songs = [
  {name: "Doors", youtube: "wE_KOXiSbI8", album_id: 4},
  {name: "Brand Name", youtube: "vuCyrtGQhAk", album_id: 4},
  {name: "Rush Hour", youtube: "L73SaFeTaA8", album_id: 4},
  {name: "Two Matches", youtube: "KWtg0BDRl9k", album_id: 4},
  {name: "100 Grandkids", youtube: "RDCoM1x7U38", album_id: 4},
  {name: "Time Flies", youtube: "TOvPYP55FlM", album_id: 4},
  {name: "Weekend", youtube: "EAL3PuyulZw", album_id: 4},
  {name: "Club House", youtube: "d2iONei2b7U", album_id: 4},
  {name: "In The Bag", youtube: "cRxpib4eV2E", album_id: 4},
  {name: "Break the Law", youtube: "IQ49uwe-zv8", album_id: 4},
  {name: "Perfect Circle/God Speed", youtube: "2UkrJ0YjjUY", album_id: 4},
  {name: "When in Rome", youtube: "hGizbKWt7_g", album_id: 4},
  {name: "ROS", youtube: "-2AfeMnpiRI", album_id: 4},
  {name: "Cut the Check", youtube: "K6-8KO5UQQo", album_id: 4},
  {name: "Ascension", youtube: "8RUbM_WSYTI", album_id: 4},
  {name: "Jump", youtube: "x-2Jd9d2GTY", album_id: 4},
  {name: "The Festival", youtube: "ZptG-yglvmw", album_id: 4}
]

am_songs.each do |song|
  Song.create(song)
end

divine_songs = [
  {name: "Congratulations", youtube: "JoFkQ7iAQcw", album_id: 5},
  {name: "Dang!", youtube: "LR3GQfryp9M", album_id: 5},
  {name: "Stay", youtube: "5WU7oGiwiao", album_id: 5},
  {name: "Skin", youtube: "GE_iHakWos0", album_id: 5},
  {name: "Cinderella", youtube: "0fcsGS1dEro", album_id: 5},
  {name: "Planet God Damn", youtube: "P91dAAsvsPY", album_id: 5},
  {name: "Soulmate", youtube: "3ADKdqcdNqs", album_id: 5},
  {name: "We", youtube: "XL--KSNxfy8", album_id: 5},
  {name: "My Favorite Part", youtube: "J_8xCOSekog", album_id: 5},
  {name: "God is Fair, Sexy, Nasty", youtube: "YbbaJIpkGMs", album_id: 5}
]

divine_songs.each do |song|
  Song.create(song)
end

blue_songs = [
  {name: "English Lane", youtube: "jenO5Fwp2sI", album_id: 6},
  {name: "Blue Slide Park", youtube: "7Sya2lGMuYE", album_id: 6},
  {name: "Party on Fifth Ave", youtube: "f3GGN51_pjE", album_id: 6},
  {name: "PA Nights", youtube: "BhYubDi_2_k", album_id: 6},
  {name: "Frick Park Market", youtube: "KJ19PJ7-SWc", album_id: 6},
  {name: "Smile Back", youtube: "T_Mt6Isew_0", album_id: 6},
  {name: "Under the Weather", youtube: "T32idaCH3Po", album_id: 6},
  {name: "Of the Soul", youtube: "C9RdmVDxl4I", album_id: 6},
  {name: "My Team", youtube: "cCaSqmdOm04", album_id: 6},
  {name: "Up All Night", youtube: "nGB_FZtHyPI", album_id: 6},
  {name: "Loitering", youtube: "s2OI2F9k4nk", album_id: 6},
  {name: "Hole in my Pocket", youtube: "-tmA3TcLf8c", album_id: 6},
  {name: "Diamonds and Gold", youtube: "sGAGev81uOI", album_id: 6},
  {name: "Missed Calls", youtube: "ys-9b9QI3Q4", album_id: 6},
  {name: "Man in the Hat", youtube: "YeNC1I9wE1U", album_id: 6},
  {name: "One Last Thing", youtube: "QBk8fXaFSMs", album_id: 6},
]

blue_songs.each do |song|
  Song.create(song)
end

kids_songs = [
  {name: "Kicking Incredibly Dope Shit", youtube: "FV9_ND7CrYs", album_id: 7},
  {name: "Outside", youtube: "g-Nj1LIKo3U", album_id: 7},
  {name: "Get em Up", youtube: "jwj_4kbcUHY", album_id: 7},
  {name: "Nikes on my Feet", youtube: "a-rqu-hjobc", album_id: 7},
  {name: "Senior Skip Day", youtube: "h7NJfuVk9hY", album_id: 7},
  {name: "The Spins", youtube: "mkGT1c98soU", album_id: 7},
  {name: "Traffic in the Sky", youtube: "WIUJXgvwgZ0", album_id: 7},
  {name: "Dont Mind if I Do", youtube: "VbjhM3Bmusw", album_id: 7},
  {name: "Paper Route", youtube: "uF__NW16rT4", album_id: 7},
  {name: "Good Evening", youtube: "ST4HeGPuw8Y", album_id: 7},
  {name: "Ride Around", youtube: "qrxkiAf0sl8", album_id: 7},
  {name: "Knock Knock", youtube: "6bMmhKz6KXg", album_id: 7},
  {name: "Mad Flava Heavy Flow", youtube: "sDgBUU8-4QE", album_id: 7},
  {name: "Kool Aid and Frozen Pizza", youtube: "UnAbszcy3bs", album_id: 7},
  {name: "All I Want is You", youtube: "8ZbD-rqHOr0", album_id: 7},
  {name: "Poppy", youtube: "C_7G48V71m0", album_id: 7},
  {name: "Face in the Crowd", youtube: "h3-RhAEgVjU", album_id: 7},
  {name: "La La La", youtube: "_MMI1hEScO8", album_id: 7},


]

kids_songs.each do |song|
  Song.create(song)
end

delusional_songs = [
  {name: "Larry", youtube: "fxopeGFFw0I", album_id: 8},
  {name: "Halo", youtube: "yG6KysBKtYE", album_id: 8},
  {name: "Vertigo", youtube: "sY2Su11-zuE", album_id: 8},
  {name: "Bill", youtube: "il92krFwM-o", album_id: 8},
  {name: "72", youtube: "4ekjhYXhno4", album_id: 8},
  {name: "The Jesuits", youtube: "gALBvI_a7mY", album_id: 8},
  {name: "Dr. Thomas", youtube: "ZjOeQfMD89w", album_id: 8},
  {name: "Labido", youtube: "cO8VuIhcA5c", album_id: 8},
  {name: "Melvin", youtube: "oq1fb3wWpUw", album_id: 8},
  {name: "Grandpa Used to Carry a Flask", youtube: "xKpg7bV5ml4", album_id: 8},
]

delusional_songs.each do |song|
  Song.create(song)
end

macadelic_songs = [
  {name: "Love Me As I Have Loved You", youtube: "TlS_XHgKjvo", album_id: 9},
  {name: "Desperado", youtube: "C8-L78g10Ag", album_id: 9},
  {name: "Loud", youtube: "_BYIEXzdnlY", album_id: 9},
  {name: "Thoughts from a Balcony", youtube: "nxufWf7dEcM", album_id: 9},
  {name: "Aliens Fighting Robots", youtube: "1ivzb0yl4fg", album_id: 9},
  {name: "Vitamins", youtube: "kcfUxP0yoak", album_id: 9},
  {name: "Fight the Feeling", youtube: "As_cvwAMYi4", album_id: 9},
  {name: "Lucky Ass Bitch", youtube: "XZAU4K9TXBM", album_id: 9},
  {name: "The Mourning After", youtube: "kZk3OhsPYQk", album_id: 9},
  {name: "1 Threw 8", youtube: "_0bqJ1yRaOs", album_id: 9},
  {name: "Ignorant", youtube: "AnMz52URFXc", album_id: 9},
  {name: "The Question", youtube: "DS4dmS-t60Q", album_id: 9},
  {name: "Angels", youtube: "mODR7mL-9pU", album_id: 9},
  {name: "America", youtube: "1nZKwreCVtU", album_id: 9},
  {name: "Sunlight", youtube: "CVSzOsi3sao", album_id: 9},
  {name: "Clarity", youtube: "6CJ4odoWNSs", album_id: 9},
  {name: "Fuck em All", youtube: "FgcAUMz9lzA", album_id: 9}
]

macadelic_songs.each do |song|
  Song.create(song)
end

space_songs = [
  {name: "SDS Live", youtube: "2jcFbup8M_0", album_id: 10},
  {name: "Star Room Live", youtube: "528ZCmsaJZc", album_id: 10},
  {name: "Best Day Ever Live", youtube: "Uu3PMT5yDWI", album_id: 10},
  {name: "Bird Call Live", youtube: "4bcK2mcCw1I", album_id: 10},
  {name: "Watching Movies Live", youtube: "94u8Dd7AX5M", album_id: 10},
  {name: "Remember Live", youtube: "2brPdaMXt4g", album_id: 10},
  {name: "The Question Live", youtube: "jleodeLhexY", album_id: 10},
  {name: "Objects in the Mirror Live", youtube: "IyIY4wBMowk", album_id: 10},
  {name: "Youforia Live", youtube: "xhnA-h80um0", album_id: 10},
  {name: "Eggs Aisle", youtube: "Nd4BkhorZbc", album_id: 10},
  {name: "Earth", youtube: "arh4rGKdEMk", album_id: 10},
  {name: "Life", youtube: "p2Ic55PW1Dc", album_id: 10},
  {name: "Black Bush", youtube: "DGzFVOCnb9c", album_id: 10},
  {name: "In the Morning", youtube: "YVpRT0_g2FQ", album_id: 10}
]

space_songs.each do |song|
  Song.create(song)
end

best_songs = [
  {name: "Best Day Ever", youtube: "AbV-Q6tz4B8", album_id: 11},
  {name: "Get Up", youtube: "YcXRs-XwA-Y", album_id: 11},
  {name: "Donald Trump", youtube: "74TFS8r_SMI", album_id: 11},
  {name: "Oy Vey", youtube: "xhDPVvEY8XM", album_id: 11},
  {name: "I'll Be There", youtube: "JX2W8d4GMDM", album_id: 11},
  {name: "GetUp", youtube: "YcXRsXwAY", album_id: 11},
  {name: "Wear My Hat", youtube: "bbhgzA98IAY", album_id: 11},
  {name: "Wake Up", youtube: "lhacDi7_c9c", album_id: 11},
  {name: "All Around the World", youtube: "LO243sHBblw", album_id: 11},
  {name: "Down the Rabbit Hole", youtube: "n62c2GcQ-NQ", album_id: 11},
  {name: "In the Air", youtube: "QtTXIoy48XU", album_id: 11},
  {name: "Play ya Cards", youtube: "sT-RypfNTEc", album_id: 11},
  {name: "She Said", youtube: "iQdkWnLM8Y8", album_id: 11},
  {name: "Life Aint Easy", youtube: "p9I35Tav2us", album_id: 11},
  {name: "Snooze", youtube: "P-EygKhHxmw", album_id: 11},
  {name: "Keep Floatin", youtube: "KDjxQFpGvNQ", album_id: 11},
  {name: "BDE Bonus", youtube: "J1z_6XRytak", album_id: 11}
]

best_songs.each do |song|
  Song.create(song)
end

ros_songs = [
  {name: "Birthday v1", youtube: "gLroLUKBpTU", album_id: 12},
  {name: "If Poseidon had a Surfboard v1", youtube: "Ucnxz_CNpLU", album_id: 12},
  {name: "Novice Space Travel v1", youtube: "r_5jQBNmeCI", album_id: 12},
  {name: "Gelato Party v1", youtube: "3EJroHOxC4c", album_id: 12},
  {name: "I'm Actually a Fish Alien v1", youtube: "kUr_8hg9y7Q", album_id: 12},
  {name: "She used to Love Me v1", youtube: "oc2OBt_kZNg", album_id: 12},
  {name: "The Revolution is Coming v1", youtube: "_A9FzckjKDs", album_id: 12},
  {name: "Avocado v1", youtube: "ekA-bHWxTE4", album_id: 12},
  {name: "Fuckin Shit v2", youtube: "NpKkwHx66oI&t=3s", album_id: 12},
  {name: "jjjoh v2", youtube: "utU5edBbCf0", album_id: 12},
  {name: "Hulu v2", youtube: "Tz557ZjoUjA", album_id: 12},
  {name: "Yooo v2", youtube: "nYVD0karQG4", album_id: 12},
  {name: "Atom Bomb v2", youtube: "XQd8Q4hGiNg", album_id: 12},
  {name: "Juil v2", youtube: "WuDVM6hS6i4", album_id: 12},
  {name: "HXH v2", youtube: "1VnkuG4xXPo", album_id: 12},
  {name: "Here is a Bear v2", youtube: "rGDvG4gxkKI", album_id: 12},
  {name: "FACEBUSH v2", youtube: "1PjMZOH1oiU", album_id: 12},
  {name: "Funk Me v2", youtube: "_a3zARxtqhQ", album_id: 12},
  {name: "Best for Last v2", youtube: "lmtxywyKhYY", album_id: 12},
  {name: "Smile v2", youtube: "i_zlz8nCFrw", album_id: 12}
]

ros_songs.each do |song|
  Song.create(song)
end

stolen_songs = [
  {name: "Intro", youtube: "l6TwPSAlwVI", album_id: 14},
  {name: "Fantoms", youtube: "yvYUnv4cMIU", album_id: 14},
  {name: "Heaven", youtube: "M7wwauyZU4c", album_id: 14},
  {name: "Guns and Roses", youtube: "J18g3Tr20AE", album_id: 14},
  {name: "Back Sellin' Crack", youtube: "CfOeB9YpmcY", album_id: 14},
  {name: "Stuck in My Ways", youtube: "qgag34NOk-c", album_id: 14},
  {name: "Killin Y'all", youtube: "8-uZHewurjs", album_id: 14},
  {name: "Thought About You", youtube: "Ma5Ai5IrFSc", album_id: 14},
  {name: "Sleep", youtube: "0LSHTlWA6uc", album_id: 14},
  {name: "Earth Science", youtube: "NcF014iVSUA", album_id: 14},
  {name: "Progressive 3", youtube: "yf1HtPNGoiE", album_id: 14},
  {name: "Locked and Loaded", youtube: "arJRoCcTv9s", album_id: 14},
  {name: "Humble", youtube: "WBfr4Ccpx08", album_id: 14},
  {name: "45", youtube: "MX1tVoD-E4w", album_id: 14},
  {name: "Oh You Scared", youtube: "JlcPcMW5Vzw", album_id: 14},
  {name: "Trunk Rattle", youtube: "wy1SQ2cRKP4", album_id: 14},
  {name: "Nate", youtube: "snYU9NRCbRs", album_id: 14},
  {name: "Turn", youtube: "Y2AoYXobIoQ", album_id: 14},
  {name: "Shots", youtube: "Fm_OW-BwgE4", album_id: 14},
  {name: "Outro", youtube: "A90PQahFYxQ", album_id: 14}
]

stolen_songs.each do |song|
  Song.create(song)
end

everything_songs = [
  {name: "The Star Room OG Version", youtube: "DqNb66P8cSw", album_id: 13},
  {name: "That's Life", youtube: "4oviKWgwzE4", album_id: 13},
  {name: "Happy", youtube: "tCc12IqBzRE", album_id: 13},
  {name: "Buttons", youtube: "v2Q9kltRpbE", album_id: 13},
  {name: "Programs", youtube: "Wvm5GuDfAas", album_id: 13},
  {name: "Once a Day I Rise", youtube: "ei0aWdzN6c0", album_id: 13},
  {name: "Inertia", youtube: "qKh8FiKzfvQ", album_id: 13},
  {name: "Dunno (Live)", youtube: "8aHvZ9eD6vs", album_id: 13},
  {name: "Real", youtube: "-iJkg9gdrYw", album_id: 13},
  {name: "Garden Snakes", youtube: "oogsGRGRFN8", album_id: 13},
  {name: "PlaneCarBoat", youtube: "iAQdqIZQA8c", album_id: 13},
  {name: "Just Some Raps, Nothing To See Here, Move Along", youtube: "KQcx53rn1Ic", album_id: 13},
  {name: "Headaches & Migraines", youtube: "ntbhlxpzmAY", album_id: 13},
  {name: "Melt", youtube: "6hVDwQMc_fM", album_id: 13},
  {name: "Salamander", youtube: "dpTNzLUW1l8", album_id: 13},
  {name: "Guidelines", youtube: "4WWltsaADBc", album_id: 13},
  {name: "Doodling in the Key of C Sharp", youtube: "w5NAoFDFmb8", album_id: 13}
]

everything_songs.each do |song|
  Song.create(song)
end
