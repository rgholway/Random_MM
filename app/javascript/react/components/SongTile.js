import React, { Component } from 'react';

class SongTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        youtube: "",
        active: ""
        }
        this.onClick = this.onClick.bind(this)
  }
    onClick() {
      this.props.onClick(this.props.id)
    }

  render() {
    return (
      <div>
        <div className="tracks" onClick={this.onClick}>{this.props.num}. {this.props.title}</div>
      </div>
    )
  }
}

export default SongTile
