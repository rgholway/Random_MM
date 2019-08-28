import React, { Component } from 'react';
import CircleType from 'circletype';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
        }
    this.circle = this.circle.bind(this)
  }

  circle() {
    let circle = new CircleType(document.getElementById('demo2'));
  }

  componentWillMount() {
    this.circle()
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Circle
