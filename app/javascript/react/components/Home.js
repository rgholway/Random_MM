import React, { Component } from 'react'
import Example from './Example'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: [],
      album: "",
      active: "active"
    }
    this.playSong = this.playSong.bind(this)
  }

playSong() {
  let num = (1 + Math.floor(Math.random() * 4))
    this.setState({album: `album${num}`, active: ""})
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


  render() {
    return(
      <div>
        <div className="youtube">
          <Example
            youtube= {this.state.song.youtube}
          />
        </div>
        <div className="play__song" onClick={this.playSong}>Play Song</div>
        <div className="random__mac">
          <img className={`mac__face--${this.state.album}`} src="https://lastfm-img2.akamaized.net/i/u/1cb98048aa15c210c43d5553e1d45d1d.png"/>
          <img className="swimming" src="https://media.pitchfork.com/photos/5b4e36a4dc6c142e533571c8/1:1/w_600/Mac%20Miller_Swimming.jpg"/>
          <img className="faces" src="https://media.pitchfork.com/photos/5929a7d7ea9e61561daa56a2/1:1/w_600/85c259af.jpg"/>
          <img className="wmtso" src="https://assets.capitalxtra.com/2013/48/best-hip-hop-album-covers-6-1386002950-view-0.jpg"/>
          <img className="good__am" src="https://i2.wp.com/www.parlemag.com/wp-content/uploads/2015/08/Mac-Miller-GOOD-AM.jpg?fit=684%2C684&ssl=1"/>
        </div>
      </div>
    )}
  }

  export default Home
