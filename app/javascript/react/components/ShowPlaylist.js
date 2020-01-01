import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PlaylistTile from './PlaylistTile';
import VoteVideo from './VoteVideo';
import SearchBar from './SearchBar';
import SearchTile from './SearchTile';

class PlaylistShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      youtube: "",
      id: "",
      setting: "--play--active",
      play: "",
      status: "",
      name: "video--vote",
      mode: "dark",
      side: "left",
      songs: [],
      activeSearch: "inactive",
      active: ""
        }
      this.fetchPlaylist = this.fetchPlaylist.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleRight = this.handleRight.bind(this)
      this.handleLeft = this.handleLeft.bind(this)
      this.handleShuffle = this.handleShuffle.bind(this)
      this.handleMode = this.handleMode.bind(this)
      this.searchSong = this.searchSong.bind(this)
      this.handleAdd = this.handleAdd.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
  }

  fetchPlaylist() {
    fetch(`/api/v1/playlists/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ playlist: body });
    })
  }

  handleClick(id, youtube) {
    this.setState({ id: id, youtube: youtube, name: "video--vote--active"})
  }

  handleAdd(id) {
    let jsonStringInfo = JSON.stringify(id)
      fetch(`/api/v1/tracks/${this.props.params.id}`, {
        method: 'PUT',
        body: jsonStringInfo,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      .then(formPayload => formPayload.json())
      .then(body => {
        this.setState({ playlist: body });
      })
  }

  handleRight() {
    let song = this.state.youtube
    let selected = ""
    let yt = this.state.youtube
    let i = -1
    let index = ""
    this.state.playlist.forEach( function(song) {
      i += 1
      if (song[2] == yt) {
        index = i
      }})
      let selected_song = (index + 1)
    this.setState( { youtube: this.state.playlist[selected_song][2]})
  }

  handleLeft() {
    let song = this.state.youtube
    let selected = ""
    let yt = this.state.youtube
    let i = -1
    let index = ""
    this.state.playlist.forEach( function(song) {
      i += 1
      if (song[2] == yt) {
        index = i
      }})
      let selected_song = (index - 1)
    this.setState( { youtube: this.state.playlist[selected_song][2]})
  }

  handleShuffle() {
    let shuffled_playlist = this.state.playlist
    let shuffled = shuffled_playlist.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ playlist: shuffled })
  }

  handleMode() {
    if (this.state.mode == "dark") {
      this.setState({ mode: "light", side: "left" })
    }
    else {
      this.setState({ mode: "dark", side: "right" })
    }
  }

  handleDelete(id) {
    let jsonStringInfo = JSON.stringify(id)
      fetch(`/api/v1/votes/${this.props.params.id}`, {
        method: 'PUT',
        body: jsonStringInfo,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      .then(formPayload => formPayload.json())
      .then(body => {
        this.setState({ playlist: body });
      })
  }

  searchSong(song) {
    this.setState({ songs: song, active: "--active"})
  }

  componentWillMount() {
    this.fetchPlaylist()
  }

  render() {
    let songsArray = this.state.songs.map( song => {
      return(
        <SearchTile
          key= {song.id}
          id= {song.id}
          name= {song.name}
          youtube= {song.youtube}
          onClick= {this.handleAdd}
          active= {this.state.active}
        />
      )
    })
    let playlistArray = this.state.playlist.map( playlist => {
      return(
        <PlaylistTile
          key= {playlist[0]}
          id= {playlist[0]}
          name= {playlist[1]}
          youtube= {playlist[2]}
          onClick= {this.handleClick}
          delete= {this.handleDelete}
          dark= {this.state.mode}
        />
      )
    })
    return (
      <div className={this.state.mode}>
        <div className="playlist__search">
          <SearchBar
            searchSong= {this.searchSong}
          />
        </div>
        <div className={`song__playlist--${this.state.mode}`}>
          {playlistArray}
        </div>
        <div className={`mode--${this.state.mode}`} onClick={this.handleMode}>
          <div className={`mode--button--${this.state.mode}`}></div>
          <div className={`words--${this.state.mode}`}></div>
        </div>
          <VoteVideo
            key= {this.state.id}
            youtube= {this.state.youtube}
            status= {this.state.status}
            className= {this.state.name}
            handleRight= {this.handleRight}
            handleLeft= {this.handleLeft}
            handleShuffle= {this.handleShuffle}
            mode= {this.state.mode}
          />
          <div className={`songs__search${this.state.active}`}> {songsArray} </div>
      </div>
    )
  }
}

export default PlaylistShow
