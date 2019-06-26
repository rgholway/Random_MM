import React, { Component } from 'react';
import SongTile from './SongTile'
import { browserHistory } from 'react-router';

class ArtistTile extends Component {
  constructor(props) {
    super(props);
    this.state = {album: "",
      circle: "",
      random: ""
        }
        this.click = this.click.bind(this)
        this.firstClick = this.firstClick.bind(this)
  }

  click() {
    browserHistory.push(`/${this.props.short}`)
  }

  firstClick() {
    this.setState({circle: `${this.props.random}`})
    let random = this.props.random
    setTimeout(function(){ browserHistory.push(`/${random}`); }, 3500)
  }

  render() {
    return (
      <div>
      <div className="title__home" onClick={this.firstClick}>RANDOM ARTIST</div>
        <div className={`${this.props.short}`} onClick={this.click}>
          <h6 className="artist__name">{this.props.name}</h6>
          <img className="home__icon" src={this.props.icon}/>
        </div>
        <div className={`home${this.state.circle}`} onClick={this.firstClick}></div>
      </div>
    )
  }
}

export default ArtistTile
