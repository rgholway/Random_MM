import React, { Component } from 'react'
import Example from './Example'
import AlbumTile from './AlbumTile'
import Animation from './Animation'
import Links from './Links'
import QueueTile from './QueueTile'
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
      newSong: [],
      albums: [],
      youtube: "",
      queue: []
    }
    this.playSong = this.playSong.bind(this)
    this.clickSong = this.clickSong.bind(this)
    this.link = this.link.bind(this)
    this.fetchArtist = this.fetchArtist.bind(this)
    this.nextSong = this.nextSong.bind(this)
  }

playSong() {
  if (this.state.queue) {
    this.setState({youtube: this.state.queue})
  }
  if (this.state.queue == undefined) {
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
        this.setState({ song: body, youtube: body.youtube })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
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
      this.setState({ youtube: body.youtube, active: "active" })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  nextSong(yt) {
    let queue = this.state.queue
    queue.unshift(yt)
    this.setState({ queue: queue })
  }

  songQueued(yt) {
    this.setState({youtube: yt})
  }

  link() {
    browserHistory.push(`/${this.props.short}`)
  }

  componentWillMount() {
    this.fetchArtist()
    this.fetchArtists()
  }

  render() {
    console.log(this.state.queue);
    let num = 0
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
          nextSong= {this.nextSong}
        />
      )
    })
    let queueArray = this.state.queue.map(song => {
      num += 1
      return(
        <QueueTile
          key= {num}
          name= {song}
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
        <div className="artists"><Link className="home__link" to="/">|   Home</Link>{artistsArray}</div>
        <div className={`youtube--active`}>
          <Example
            youtube= {this.state.queue[0]}
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
        <div className="songs__queue">
          <div className="queue__title">Songs Queued</div>
          <div className="queued__tracks">{queueArray}</div>
        </div>
      </div>
    )}
  }

  export default ArtistShow
