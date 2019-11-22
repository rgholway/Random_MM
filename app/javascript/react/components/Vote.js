import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import VoteTile from './VoteTile'
import VoteVideo from './VoteVideo'

class Vote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      youtube: "",
      active: ""
    }

    this.fetchSongs = this.fetchSongs.bind(this)
    this.handleHover = this.handleHover.bind(this)

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

    handleHover(active, youtube) {
      this.setState({ active: active, youtube: youtube})
    }

    componentWillMount() {
      this.fetchSongs()
    }

  render() {
    let songArray = this.state.songs.map(song => {
      return(
        <VoteTile
          key= {song.id}
          id= {song.id}
          name= {song.name}
          youtube= {song.youtube}
          handleHover= {this.handleHover}
        />
      )
    })
    console.log(this.state.songs)
    return(
      <div className="vote">

        <div className="vote__songs">
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
