import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import ArtistTile from './ArtistTile'
import ArtistShow from './ArtistShow'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      random: "",
      circle: "",
      info: "YOUR FAVORITE ARTIST'S MIXTAPES AND ALBUMS IN ONE PLACE",
      title: "",
      line: ""
    }
    this.fetchArtists = this.fetchArtists.bind(this)
    this.firstClick = this.firstClick.bind(this)
    this.hover = this.hover.bind(this)
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
          this.setState({ artists: body[0], random: body[1]})
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    firstClick() {
      this.setState({circle: `${this.state.random}`})
      let random = this.state.random
      setTimeout(function(){ browserHistory.push(`/${random}`); }, 3500)
    }

    hover(info, title, line) {
      this.setState({ info: info, title: title, line: line })
    }

  componentWillMount() {
    this.fetchArtists()
  }

  render() {
    let artistsArray = this.state.artists.map(artist => {
      return(
        <ArtistTile
          key= {artist.id}
          name= {artist.name}
          short= {artist.short}
          random= {this.state.random}
          icon= {artist.icon}
          hover= {this.hover}
          description= {artist.description}
        />
      )
    })
    let artistsSecondArray = this.state.artists.map(artist => {
      return(
        <ArtistShow
          key= {artist.id}
          name= {artist.name}
          short= {artist.short}
        />
      )
    })
    return(
      <div>
      <div className={`title__main`}>RANDOMMAC</div>
      <div className={`title__name${this.state.line}`}>{this.state.title}</div>
      <div className="title__info">
        <div className="title__description">{this.state.info}</div>
      </div>
        <div className="home__wheel">
        <div className={`home${this.state.circle}`} onClick={this.firstClick}></div>
          {artistsArray}
        </div>
      </div>
    )}
  }

  export default Home
