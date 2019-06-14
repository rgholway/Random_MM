import React, { Component } from 'react';
import SongTile from './SongTile'

class AlbumTile extends Component {
  constructor(props) {
    super(props);
    this.state = {album: "",
      hover: "",
      songs: []
        }
        this.handleHover = this.handleHover.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
  }

  handleHover() {
    this.setState({album: `${this.props.id}`, hover: "hover"})
    fetch(`/api/v1/songs/${this.props.id}`)
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

  handleLeave() {
    this.setState({album: "", hover: ""})
  }

  render() {
    let songsArray = this.state.songs.map(song => {
      return(
        <SongTile
          key= {song.id}
          title= {song.name}
          youtube= {song.youtube}
        />
    )
    })
    return (
      <div>
        <div>
          <img className={this.props.css} src={this.props.art} onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}/>
        </div>
        <div className={`hover--${this.state.album}`}>
          <div className={`title__${this.state.hover}`}>{this.props.name}</div>
          <div className={`songs__${this.state.hover}`}>{songsArray}</div>
        </div>
      </div>
    )
  }
}

export default AlbumTile
