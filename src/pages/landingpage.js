import React from "react";
import "../style/landing.css";
import naruto from "../assets/naruto.png";

function LandingPage() {
  return (
    <div className="parent">
      {/*Banner header*/}
      <div className="header">
        <header className="side_nav">
          <div className="logo">
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="rgb(214 217 219)"
            >
              <use xlinkHref="/sprites.svg#logo" />
            </svg>
          </div>
          <div className="menu">
            <a href="#" className="item">
              <svg
                viewBox="0 0 512 512"
                width="25px"
                height="25px"
                fill="rgb(214 217 219)"
              >
                <use xlinkHref="/sprites.svg#home" />
              </svg>
            </a>
            <a href="#" className="item">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24.00 24.00"
                fill="rgb(214 217 219)"
              >
                <use xlinkHref="/sprites.svg#explore" />
              </svg>
            </a>
            <a href="#" className="item">
              <svg
                fill="rgb(214 217 219)"
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
              >
                <use xlinkHref="/sprites.svg#notification" />
              </svg>
            </a>
            <a href="#" className="item">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 1024 1024"
                fill="rgb(214 217 219)"
              >
                <use xlinkHref="/sprites.svg#message" />
              </svg>
            </a>
            <a href="#" className="item">
              <svg
                fill="rgb(214 217 219)"
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
              >
                <use xlinkHref="/sprites.svg#user" />
              </svg>
            </a>
          </div>
        </header>
      </div>
      {/*Feed*/}
      <div className="Main">
        <div className="title">
          <h2>Home</h2>
        </div>
        <div className="tweet">
          <div className="profile-pic">
            <img src={naruto} alt="profile" />
          </div>
          <div className="text-input">
            <textarea placeholder="What's happening?" />
            <div className="text-bar">
              <div className="icon-list">
                <a href="#">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 192 192"
                    stroke="#1D9BF0"
                  >
                    <use xlinkHref="sprites.svg#img" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="#1D9BF0"
                    stroke="#1D9BF0"
                  >
                    <use xlinkHref="/sprites.svg#gif" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1D9BF0"
                  >
                    <use xlinkHref="/sprites.svg#emoji" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 64 64"
                    strokeWidth="4"
                    stroke="#1D9BF0"
                    fill="none"
                  >
                    <use xlinkHref="/sprites.svg#schedule" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    fill="#1D9BF0"
                    width="23px"
                    height="23px"
                    viewBox="0 0 32 32"
                    stroke="#1D9BF0"
                    strokeWidth="0.00032"
                  >
                    <use xlinkHref="/sprites.svg#map" />
                  </svg>
                </a>
              </div>
              <button className="tweet-btn">Tweet</button>
            </div>
          </div>
        </div>
        <div className="feed">
          <div className="post">
            <div className="profile-pic">
              <img src={naruto} alt="profile" />
            </div>
            <div className="post-space">
              <div className="username">
                <h4 id="user">Naruto</h4>
                <span id="tag" className="pd">
                  @naruto
                </span>
                <span id="timestamp" className="pd">
                  April 2
                </span>
              </div>
              <div id="msg" className="post-msg">
                A sample refers to a smaller, manageable version of a larger
                group. It is a subset containing the characteristics of a larger
                population. Samples are used in statistical testing when
                population sizes are too large for the test to include all
                possible members or observations.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*SideBar*/}
      <div className="Sidebar"></div>
    </div>
  );
}

export default LandingPage;
