import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import ArtistTile from './ArtistTile'

class ArtistShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: []
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
          this.setState({ artists: body})
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
          short = {artist.short}
        />
      )
    })
    return(
      <div>
      {artistsArray}
      </div>
    )}
  }

  export default ArtistShow
