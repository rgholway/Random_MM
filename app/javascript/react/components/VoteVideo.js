import React from 'react';
import YouTube from 'react-youtube';

class VoteVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: "play__button--play--active",
      status: "",
      stop: "",
      timer: 0.0
        }
      this.handleRight = this.handleRight.bind(this)
      this.handleLeft = this.handleLeft.bind(this)
      this.handleShuffle = this.handleShuffle.bind(this)
      this.handleEnd = this.handleEnd.bind(this)
      this._onReady = this._onReady.bind(this)
      this._onEnd = this._onEnd.bind(this)
      this._onPause = this._onPause.bind(this)
      this._onStateChange = this._onStateChange.bind(this)
      this.startTimer = this.startTimer.bind(this)
      this._onPlay = this._onPlay.bind(this)
      this.handlePause = this.handlePause.bind(this)
  }

  handleRight() {
    if (this.state.status == "paused") {
      this.setState({ status: "" })
    }
    this.setState({ timer: 0 })
    this.props.handleRight()
    }

  handleLeft() {
    if (this.state.status == "paused") {
      this.setState({ status: "" })
    }
    this.setState({ timer: 0 })
    this.props.handleLeft()
    }

  handleShuffle() {
    this.props.handleShuffle()
  }

  handleEnd() {
    if (this.state.status == "") {
      this.setState({ status: "paused" })
    }
    this.props.handleEnd()
  }

  handlePause() {
    this.setState({ status: "paused" })
  }

  startTimer() {
    this.setState({ stop: "" })
    if (this.props.youtube != "") {
      this.timer = setInterval(this.timerStart.bind(this), 500)
    }
    }

    timerStart() {
      this.setState({ timer: this.state.timer + 0.5 })
      if (this.state.stop == "stop") {
        clearInterval(this.timer)
      }
    }

    stopTimer() {
      this.setState({ stop: "stop"})
      this.props.getTime(this.state.timer)
    }

  render() {
    const opts = {
      height: '0%',
      width: '0%',
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
            className="video--vote"
            onReady={this._onReady}
            onPause={this._onPause}
            onPlay={this._onPlay}
            onEnd={this._onEnd}
            onStateChange={this._onStateChange}
            status={this.props.status}
          />
          <div className={`black__screen--${this.props.mode}`}>
            <div className="right--arrow" onClick={this.handleRight}></div>
            <div className="left--arrow" onClick={this.handleLeft}></div>
            <div className="shuffle--button" onClick={this.handleShuffle}></div>
            <div className="end__button" onClick={this.handleEnd}></div>
          </div>
        </div>
    );
  }

  _onReady(event) {
    if(this.state.status != "paused") {
      event.target.playVideo()
    }
  }

  _onPause(event) {
    this.stopTimer()
  }

  _onStateChange(event) {
  }

  _onPlay(event) {
    if (this.state.status == "") {
      this.startTimer()
    }
    if (this.props.status == "played" && this.state.status == "paused") {
      event.target.seekTo(this.state.timer)
      this.setState({ status: "" })
      return
    }
  }

  _onEnd(event) {
    this.setState({ timer: 0 })
    this.props.handleRight()
  }


}

export default VoteVideo
