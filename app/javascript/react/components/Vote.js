import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import VoteTile from './VoteTile'
import VoteAlbumTile from './VoteAlbumTile'
import VoteVideo from './VoteVideo'

class Vote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      youtube: "",
      active: "",
      status: "--first",
      albums: []
    }

    this.fetchSongs = this.fetchSongs.bind(this)
    this.fetchAlbums = this.fetchAlbums.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.playlistQuestions = this.playlistQuestions.bind(this)

  }

    fetchSongs() {
      fetch(`/api/v1/votes`)
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
          this.setState({ songs: body })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    fetchAlbums() {
      fetch(`/api/v1/albums`)
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
          this.setState({ albums: body })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    handleHover(active, youtube) {
      this.setState({ active: active, youtube: youtube})
    }

    playlistQuestions(question) {
      this.setState({ status: question })
    }

    componentWillMount() {
      this.fetchSongs()
      this.fetchAlbums()
    }

  render() {
    let songArray = this.state.songs.map(song => {
      return(
        <VoteTile
          key= {song.id}
          id= {song.id}
          name= {song.name}
          youtube= {song.youtube}
          category= {song.first_characteristic}
          handleHover= {this.handleHover}
        />
      )
    })

    let albumArray = this.state.albums.map(album => {
      return(
        <VoteAlbumTile
          key= {album.id}
          id= {album.id}
          name= {album.title}
          art= {album.art}
          sneak= {album.sneak_peek}
          handleHover= {this.handleHover}
          playlistQuestions= {this.playlistQuestions}
        />
      )
    })

    return(
      <div className="vote">
      <div className={`vote__albums--title${this.state.status}`}>Choose Your Favorite Album</div>
      <div className={`vote__albums--info${this.state.status}`}>Hover over Album to Hear a Sneak Peek</div>
        <div className={`vote__albums${this.state.status}`}>
          {albumArray}
        </div>
        <div className={`vote__songs${this.state.status}`}>
        {songArray}
        </div>
        <div className={`vote--video--${this.state.active}`}>
          <VoteVideo
            youtube= {this.state.youtube}
          />
        </div>
      </div>
    )}
  }

  export default Vote
