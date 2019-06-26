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
      random: ""
    }
    this.fetchArtists = this.fetchArtists.bind(this)
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
        <div className="title__info">Your Favorite Artist's Mixtapes and Albums in one place</div>
        <div className="home__wheel">
          {artistsArray}
        </div>
      </div>
    )}
  }

  export default Home
