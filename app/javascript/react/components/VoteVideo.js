import React from 'react';
import YouTube from 'react-youtube';

class VoteVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: "play__button--play--active",
      status: ""
        }
      this.handleStop = this.handleStop.bind(this)
  }

  handleStop() {
    if (this.state.setting == "play__button--play--active") {
      this.setState({ setting: "play__button--stop--active", status: "pause" })
      this._onPause()
    }
    if (this.state.setting == "play__button--stop--active") {
      this.setState({ setting: "play__button--play--active" })
    }
  }

  render() {
    const opts = {
      height: '0%',
      width: '0%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="black__screen">
          <YouTube
            videoId={this.props.youtube}
            opts={opts}
            onReady={this._onReady}
            onEnd={this.props.songEnd}
            status={this.props.status}
          />
          <div className={this.state.setting} onClick={this.handleStop}></div>
        </div>
    );
  }

  _onReady(event) {
    event.target.playVideo();
  }

  _onPause(event) {
  }

  _onEnd(event) {

  }


}

export default VoteVideo
