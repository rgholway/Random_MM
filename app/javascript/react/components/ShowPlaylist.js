import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PlaylistTile from './PlaylistTile';
import VoteVideo from './VoteVideo';

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
      name: "under"
        }
      this.fetchPlaylist = this.fetchPlaylist.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleRight = this.handleRight.bind(this)
      this.handleLeft = this.handleLeft.bind(this)
      this.handleShuffle = this.handleShuffle.bind(this)
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
    this.setState({ id: id, youtube: youtube, name: "under--active"})
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

  componentWillMount() {
    this.fetchPlaylist()
  }

  render() {
    let playlistArray = this.state.playlist.map( playlist => {
      return(
        <PlaylistTile
          key= {playlist[0]}
          id= {playlist[0]}
          name= {playlist[1]}
          youtube= {playlist[2]}
          onClick= {this.handleClick}
        />
      )
    })
    return (
      <div className="white">
        <div className="vote">
            <div className="song__playlist">
              <div className="song__playlist__title"> First Playlist </div>
              {playlistArray}
            </div>
              <VoteVideo
                key= {this.state.id}
                youtube= {this.state.youtube}
                status= {this.state.status}
                className= {this.state.name}
                handleRight= {this.handleRight}
                handleLeft= {this.handleLeft}
                handleShuffle= {this.handleShuffle}
              />
        </div>
      </div>
    )
  }
}

export default PlaylistShow
