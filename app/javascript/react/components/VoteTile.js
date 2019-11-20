import React, { Component } from 'react';

class VoteTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        }
  }

  render() {
    return (
        <div>{this.props.name}</div>
    )
  }
}

export default VoteTile
