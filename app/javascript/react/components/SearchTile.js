import React, { Component } from 'react';

class SearchTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        }
        this.handleAdd = this.handleAdd.bind(this)
  }

    handleAdd() {
      this.props.onClick(this.props.id, this.props.name, this.props.youtube)
    }

  render() {
    return (
      <div className="searched__songs" onClick={this.handleAdd}>
        {this.props.name}
      </div>
    )
  }
}

export default SearchTile
