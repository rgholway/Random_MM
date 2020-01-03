import React from 'react';
import YouTube from 'react-youtube';

class VoteVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: "play__button--play--active",
      status: "",
      stop: "",
      timer: 0
        }
      this.handleRight = this.handleRight.bind(this)
      this.handleLeft = this.handleLeft.bind(this)
      this.handleShuffle = this.handleShuffle.bind(this)
      this.handleEnd = this.handleEnd.bind(this)
      this._onReady = this._onReady.bind(this)
      this._onPause = this._onPause.bind(this)
      this._onStateChange = this._onStateChange.bind(this)
      this.startTimer = this.startTimer.bind(this)
      this._onPlay = this._onPlay.bind(this)
      this.handlePause = this.handlePause.bind(this)
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

  handleEnd() {
    this.props.handleEnd({ stop: "stop"})
  }

  handlePause() {
    debugger;
    this.setState({ status: "paused" })
  }

  startTimer() {
    if (this.props.youtube != "") {
      this.timer = setInterval(this.timerStart.bind(this), 1000)
    }
    }

    timerStart() {
      this.setState({ timer: this.state.timer + 1 })
      if (this.state.stop == "stop") {
        clearInterval(this.timer)
      }
      console.log(this.state.timer);
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
    this.setState({ timer: 0})
    event.target.playVideo()
    this.startTimer()
  }

  _onPause(event) {
    this.stopTimer()
  }

  _onStateChange(event) {
  }

  _onPlay(event) {
    console.log(this.state.status + "state");
    console.log(typeof(this.props.status) + "props");
    if (this.props.status == "played" && this.state.status == "") {
      event.target.seekTo(this.props.seconds)
      this.setState({ status: "paused" })
      return
    }
  }

  _onEnd(event) {
  }


}

export default VoteVideo
