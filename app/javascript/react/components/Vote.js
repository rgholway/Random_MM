import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import {Link} from 'react-router';

class Vote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: ""
    }
  }

  render() {
    return(
      <div className="vote">
        <audio controls autoPlay>
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    )}
  }

  export default Vote
