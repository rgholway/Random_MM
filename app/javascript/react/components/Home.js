import React, { Component } from 'react'
import Example from './Example'
import AlbumTile from './AlbumTile'
import Animation from './Animation'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: [],
      album: "",
      active: "",
      selected: "",
      albums: []
    }
    this.playSong = this.playSong.bind(this)
    this.clickSong = this.clickSong.bind(this)
    this.fetchAlbums = this.fetchAlbums.bind(this)
  }

playSong() {
  let num = (1 + Math.floor(Math.random() * 14))
    this.setState({album: `album${num}`, active: "active"})
      fetch(`/api/v1/albums/${num}`)
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
        this.setState({ song: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchAlbums() {
      fetch('/api/v1/albums')
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

  clickSong(id) {
    fetch(`/api/v1/tracks/${id}`)
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
      this.setState({ song: body, active: "active" })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.fetchAlbums()
  }

  render() {
    let albumArray = this.state.albums.map(album => {
      return(
        <AlbumTile
          key= {album.id}
          id= {album.id}
          name= {album.title}
          art= {album.art}
          css= {album.short}
          clickSong= {this.clickSong}
        />
      )
    })

    return(
      <div>
        <div className={`youtube--${this.state.active}`}>
          <Example
            youtube= {this.state.song.youtube}
            songEnd= {this.playSong}
          />
        </div>
        <div className="random__mac">
          <div className={`mac__face--${this.state.album}`}></div>
          <div className="title" onClick={this.playSong}>MAC MILLER</div>
          {albumArray}
          <div className="play__song" onClick={this.playSong}>Click for Random Song</div>
          <div className={`circle--${this.state.album}`} onClick={this.playSong}></div>
        </div>
        <div className={`animation__box--${this.state.active}`}>
          <Animation
          />
        </div>
      </div>
    )}
  }

  export default Home
