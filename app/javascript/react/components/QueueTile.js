import React, { Component } from 'react';

class QueueTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        }
  }

  render() {
    return (
        <div className="queued__tracks">{this.props.name}</div>
    )
  }
}

export default QueueTile
