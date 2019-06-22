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
        <div className={`first__m${this.state.status}`} onClick={this.handleClick}>{this.props.firstLetter}</div>
        <div className={`second__m${this.state.status}`} onClick={this.handleClick}>{this.props.secondLetter}</div>
        <div className={`mac${this.state.status}`}>{this.props.firstName}</div>
        <div className={`miller${this.state.status}`}>{this.props.secondName}</div>
        <div className={`memento${this.state.status}`}>{this.props.thirdName}</div>
        <div className={`mori${this.state.status}`}>{this.props.fourthName}</div>
      </div>
    )
  }
}

export default Animation
