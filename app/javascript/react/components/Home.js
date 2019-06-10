import React, { Component } from 'react'
import Example from './Example'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: [],
      album: "",
      active: ""
    }
    this.playSong = this.playSong.bind(this)
  }

playSong() {
  let num = (1 + Math.floor(Math.random() * 4))
    this.setState({album: `album${num}`, active: "active"})
      fetch(`/api/v1/albums/${num}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ song: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    return(
      <div>
        <div className={`youtube--${this.state.active}`}>
          <Example
            youtube= {this.state.song.youtube}
            songEnd= {this.playSong}
          />
        </div>
        <div className="play__song" onClick={this.playSong}>Play Song</div>
        <div className="random__mac">
          <div className={`mac__face--${this.state.album}`}></div>
          <div className="title">MAC MILLER</div>
          <img className="swimming" src="https://media.pitchfork.com/photos/5b4e36a4dc6c142e533571c8/1:1/w_600/Mac%20Miller_Swimming.jpg"/>
          <img className="faces" src="https://media.pitchfork.com/photos/5929a7d7ea9e61561daa56a2/1:1/w_600/85c259af.jpg"/>
          <img className="wmtso" src="https://images.genius.com/c2c579aaf2e5c37b2a5dd74193bb0cdd.600x600x1.jpg"/>
          <img className="good__am" src="https://i2.wp.com/www.parlemag.com/wp-content/uploads/2015/08/Mac-Miller-GOOD-AM.jpg?fit=684%2C684&ssl=1"/>
          <img className="divine" src="https://media.pitchfork.com/photos/5929bcb3ea9e61561daa752c/1:1/w_600/178c182f.jpg"/>
          <img className="blue" src="https://images.genius.com/ab260470b208b8984a74e2e42e7d1ff6.600x600x1.jpg"/>
          <img className="kids" src="https://cdn.shopify.com/s/files/1/0807/4553/products/s-l1600-1_883370e4-02dc-4b8a-8986-22a9bcfe00fa_grande.jpg?v=1544759626"/>
          <img className="macadelic" src="https://ssla.ulximg.com/image/750x750/cover/1332543471_fcbecdd3c7f506b3e7861654c8153f07.jpg/06a0fb870fc8d7c46f60cb31ddd8297e/1332543471_mac_miller_macadelic.jpg"/>
          <img className="delusional" src="http://hw-img.datpiff.com/m9019023/Mac_Miller_Delusional_Thomas-front-large.jpg"/>
          <img className="bde" src="https://cps-static.rovicorp.com/3/JPG_500/MI0004/067/MI0004067757.jpg?partner=allrovi.com"/>
          <img className="space" src="http://images.genius.com/932f12c26d028188907e55cf5ff23f3e.600x600x1.jpg"/>
          <div className="circle"></div>
        </div>
      </div>
    )}
  }

  export default Home
