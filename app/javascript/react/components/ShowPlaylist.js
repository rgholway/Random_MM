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
      play: ""
        }
      this.fetchPlaylist = this.fetchPlaylist.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleStop = this.handleStop.bind(this)
      this.stopSong = this.stopSong.bind(this)
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
    this.setState({ id: id, youtube: youtube})
  }

  stopSong() {
    this.setState({ play: "" })
  }

  handleStop() {
    if (this.state.setting == "--play--active") {
      this.setState({ setting: "--stop--active" })
      this.stopSong()
    }
    if (this.state.setting == "--stop--active") {
      this.setState({ setting: "--play--active" })
    }
  }

  componentWillMount() {
    this.fetchPlaylist()
  }

  render() {
    console.log(this.state.setting);
    let playlistArray = this.state.playlist.map(playlist => {
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
      <div className="vote">
        <div className="play__button--playlist" onClick={this.handleStop}>
          <div className={`play__button${this.state.setting}`} ></div>
          <div className={`play__button${this.state.setting}`}></div>
        </div>
          <div className="song__playlist">
            <div className="song__playlist__title"> First Playlist </div>
            {playlistArray}
          </div>
          <VoteVideo
            key= {this.state.id}
            youtube = {this.state.youtube}
          />
      </div>
    )
  }
}

export default PlaylistShow
