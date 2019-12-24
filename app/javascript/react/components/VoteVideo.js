import React from 'react';
import YouTube from 'react-youtube';

class VoteVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: "play__button--play--active",
      status: ""
        }
      this.handleRight = this.handleRight.bind(this)
      this.handleLeft = this.handleLeft.bind(this)
      this.handleShuffle = this.handleShuffle.bind(this)
  }

  handleRight() {
    this.props.handleRight()
    }

  handleLeft() {
    this.props.handleLeft()
    }

  handleShuffle() {
    this.props.handleShuffle()
  }

  render() {
    const opts = {
      height: '100%',
      width: '30%',
      showInfo: 0,
      setSize: 0,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
          <YouTube
            videoId={this.props.youtube}
            opts={opts}
            className={this.props.className}
            onReady={this._onReady}
            onEnd={this.props.songEnd}
            status={this.props.status}
          />
          <div className={`black__screen--${this.props.mode}`}>
            <div className="right--arrow" onClick={this.handleRight}></div>
            <div className="left--arrow" onClick={this.handleLeft}></div>
            <div className="shuffle--button" onClick={this.handleShuffle}></div>
          </div>
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
