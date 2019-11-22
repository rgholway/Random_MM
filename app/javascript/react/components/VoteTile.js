import React, { Component } from 'react';

class VoteTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ""
        }
        this.handleHover = this.handleHover.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
  }

  handleHover() {
    this.props.handleHover("active", this.props.youtube)
  }

  handleLeave() {
    this.setState({ video: "", youtube: ""})
  }

  render() {
    return (
      <div>
        <div className="music__vote" onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
          {this.props.name}
        </div>
      </div>
    )
  }
}

export default VoteTile
