import React, { Component } from 'react';
import SongTile from './SongTile'

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {status: ""
        }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({status: "--active"})
  }

  render() {
    return (
      <div className="animation__box">
        <div className={`first__m${this.state.status}`} onClick={this.handleClick}>M</div>
        <div className={`second__m${this.state.status}`} onClick={this.handleClick}>M</div>
        <div className={`mac${this.state.status}`}>AC</div>
        <div className={`miller${this.state.status}`}>ILLER</div>
        <div className={`memento${this.state.status}`}>EMENTO</div>
        <div className={`mori${this.state.status}`}>ORI</div>
      </div>
    )
  }
}

export default Animation
