import React, { Component } from 'react';

class PlaylistTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick(this.props.id, this.props.youtube )
  }

  render() {
    return (
      <div className="songs__in__playlist" onClick={this.handleClick}>
        {this.props.name}
      </div>
    )
  }
}

export default PlaylistTile
