import React, { Component } from 'react';
import SongTile from './SongTile'
import { browserHistory } from 'react-router';

class ArtistTile extends Component {
  constructor(props) {
    super(props);
    this.state = {album: "",
        }
        this.click = this.click.bind(this)
  }

  click() {
    browserHistory.push(`/${this.props.short}`)
  }

  render() {
    return (
      <div>
        <div className={`${this.props.short}`} onClick={this.click}> {this.props.name} </div>
      </div>
    )
  }
}

export default ArtistTile
