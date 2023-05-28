import React, { Component } from 'react';
import "./inst.css";

function openVideo() {
  document.getElementById("video-window").style.display = "flex";
}

function closeVideo() {
  document.getElementById("video-window").style.display = "none";
}

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
            <div class="inst-button-video-holder">
              <button onClick={openVideo} title="Бесплатный замер">
                    Смотреть видео работы
              </button>
            </div>

            {/*Video*/}

              <div id="video-window" class="video-window-holder">
                <div class="video-window">
                  <span  class="video-window-closer">
                    <button onClick={closeVideo}>
                      <img src={process.env.PUBLIC_URL + '/closer.svg'} alt="closer" />
                    </button>
                  </span>

                  <video  controls >
                        <source src={process.env.PUBLIC_URL + '/video1.mp4'} type="video/mp4"/>
                  </video>
                  
                </div>
              </div>
        </div>
      );
    }
  }
  export default Inst;