import React, { Component } from 'react';

class SongTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        }
  }

  render() {
    debugger;
    return (
      <div className="tracks"> {this.props.title}</div>
    )
  }
}

export default SongTile
