import React, { Component } from 'react';
import "./inst.css";

class Inst extends Component {
    render() {
      return (
        <div class="inst-layout">
            <div class="inst-hendler">
                <div class="inst-hendler-in"><div class="inst-hendler-in-text">Наш Instagram</div></div>
                <a class="inst-btn" href="https://instagram.com/alexandersconditioners/" target="_blank" rel="noopener noreferrer nofollow">Подписаться</a>
            </div>
            <div class="inst-grid">
                <div><img src={process.env.PUBLIC_URL + '/no-image.jpg'} alt="imgi"></img></div>
                <div><img src={process.env.PUBLIC_URL + '/no-image.jpg'} alt="imgi"></img></div>
                <div><img src={process.env.PUBLIC_URL + '/no-image.jpg'} alt="imgi"></img></div>
                <div><img src={process.env.PUBLIC_URL + '/no-image.jpg'} alt="imgi"></img></div>
            </div>
        </div>
      );
    }
  }
  export default Inst;