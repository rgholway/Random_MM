import React, { Component } from 'react'
import Example from './Example'
import AlbumTile from './AlbumTile'
import Animation from './Animation'
import Links from './Links'
import { browserHistory } from 'react-router';
import {Link} from 'react-router';

class ArtistShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: [],
      album: "",
      active: "",
      artist: [],
      selected: "",
      what: "",
      artistName: "",
      artists: [],
      albums: []
    }
    this.playSong = this.playSong.bind(this)
    this.clickSong = this.clickSong.bind(this)
    this.link = this.link.bind(this)
    this.fetchArtist = this.fetchArtist.bind(this)
  }

playSong() {
  let size = this.state.albums.length
  let num = (Math.floor(Math.random() * size))
  let album = this.state.albums[num].id
  let css = this.state.albums[num].css
    this.setState({album: `album${css}`, active: "active"})
      fetch(`/api/v1/albums/${album}`)
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

  fetchArtist() {
      fetch(`/api/v1/artists/${this.props.params.name}`)
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
          this.setState({ albums: body[0], artist: body[1], artistName: body[2] })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    fetchArtists() {
        fetch(`/api/v1/artists`)
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
            this.setState({ artists: body[0] })
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

  link() {
    browserHistory.push(`/${this.props.short}`)
  }

  componentWillMount() {
    this.fetchArtist()
    this.fetchArtists()
  }

  render() {
    let albumArray = this.state.albums.map(album => {
      return(
        <AlbumTile
          key= {album.id}
          id= {album.id}
          name= {album.title}
          art= {album.art}
          css= {album.css}
          color= {album.color}
          text= {album.text}
          size= {album.font_size}
          clickSong= {this.clickSong}
        />
      )
    })
    let artistsArray = this.state.artists.map(artist => {
      return(
        <Links
          key= {artist.id}
          name= {artist.name}
          short= {artist.short}
        />
      )
    })
    return(
      <div>
        <div className="artists">Artists: {artistsArray}</div>
        <div className={`youtube--${this.state.active}`}>
          <Example
            youtube= {this.state.song.youtube}
            songEnd= {this.playSong}
          />
        </div>
        <div className={`random__${this.state.artist.short}`}>
          <div className={`mac__face--${this.state.album}`}></div>
          <div className="title" onClick={this.playSong}>{this.state.artistName}</div>
          {albumArray}
          <div className="play__song" onClick={this.playSong}>Click for Random Song</div>
          <div className={`circle--${this.state.album}`} onClick={this.playSong}></div>
        </div>
        <div className={`animation__box--${this.state.active}`}>
          <Animation
          name= {this.state.artist.short}
          firstLetter= {this.state.artist.first_letter}
          secondLetter= {this.state.artist.second_letter}
          thirdLetter= {this.state.artist.third_letter}
          firstName= {this.state.artist.first_name}
          secondName= {this.state.artist.second_name}
          thirdName= {this.state.artist.third_name}
          fourthName= {this.state.artist.fourth_name}
          />
        </div>
      </div>
    )}
  }

  export default ArtistShow
