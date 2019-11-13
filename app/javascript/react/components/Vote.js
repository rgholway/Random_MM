import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import song from '../../../assets/audio/New__Faces.mp3'

class Vote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ song: '../../../assets/audio/New__Faces.mp3'})
  }

  render() {
    return(
      <div className="vote" onClick={this.onClick()}>
        <audio ref={ref => this.state.song = ref} />
      </div>
    )}
  }

  export default Vote
