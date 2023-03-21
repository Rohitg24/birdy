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
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    fill="#1D9BF0"
                    stroke="#1D9BF0"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>ic_fluent_gif_24_regular</title>{" "}
                      <desc>Created with Sketch.</desc>{" "}
                      <g
                        id="🔍-Product-Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        {" "}
                        <g
                          id="ic_fluent_gif_24_regular"
                          fill="#1D9BF0"
                          fillRule="nonzero"
                        >
                          {" "}
                          <path
                            d="M18.75,3.50054297 C20.5449254,3.50054297 22,4.95561754 22,6.75054297 L22,17.2531195 C22,19.048045 20.5449254,20.5031195 18.75,20.5031195 L5.25,20.5031195 C3.45507456,20.5031195 2,19.048045 2,17.2531195 L2,6.75054297 C2,4.95561754 3.45507456,3.50054297 5.25,3.50054297 L18.75,3.50054297 Z M18.75,5.00054297 L5.25,5.00054297 C4.28350169,5.00054297 3.5,5.78404466 3.5,6.75054297 L3.5,17.2531195 C3.5,18.2196178 4.28350169,19.0031195 5.25,19.0031195 L18.75,19.0031195 C19.7164983,19.0031195 20.5,18.2196178 20.5,17.2531195 L20.5,6.75054297 C20.5,5.78404466 19.7164983,5.00054297 18.75,5.00054297 Z M8.01459972,8.87193666 C8.61149825,8.87193666 9.03352891,8.95326234 9.51677386,9.18532686 C9.82793289,9.33475204 9.95904407,9.70812933 9.80961888,10.0192884 C9.6601937,10.3304474 9.28681641,10.4615586 8.97565738,10.3121334 C8.67582824,10.1681491 8.43601415,10.1219367 8.01459972,10.1219367 C7.14788947,10.1219367 6.51103525,10.9182985 6.51103525,11.9943017 C6.51103525,13.0713011 7.14873038,13.8702789 8.01459972,13.8702789 C8.44322427,13.8702789 8.80607251,13.6904125 8.99484486,13.3695045 L9.001,13.354543 L9.001,12.620543 L8.62521827,12.6211937 C8.31142012,12.6211937 8.05163513,12.3899359 8.00699487,12.0885517 L8.00021827,11.9961937 C8.00021827,11.6823956 8.23147615,11.4226106 8.53286035,11.3779703 L8.62521827,11.3711937 L9.62682145,11.3711937 C9.94061961,11.3711937 10.2004046,11.6024516 10.2450448,11.9038358 L10.2518215,11.9961937 L10.2504852,13.5438774 L10.2504852,13.5438774 L10.2441303,13.5991827 L10.2441303,13.5991827 L10.2229651,13.6890602 L10.2229651,13.6890602 L10.2024697,13.7442077 C9.82606539,14.6343365 8.96156448,15.1202789 8.01459972,15.1202789 C6.38857781,15.1202789 5.26103525,13.707564 5.26103525,11.9943017 C5.26103525,10.2816525 6.38839145,8.87193666 8.01459972,8.87193666 Z M12.6289445,8.99393497 C12.9427427,8.99393497 13.2025276,9.22519285 13.2471679,9.52657705 L13.2539445,9.61893497 L13.2539445,14.381065 C13.2539445,14.726243 12.9741225,15.006065 12.6289445,15.006065 C12.3151463,15.006065 12.0553614,14.7748072 12.0107211,14.4734229 L12.0039445,14.381065 L12.0039445,9.61893497 C12.0039445,9.273757 12.2837665,8.99393497 12.6289445,8.99393497 Z M15.6247564,8.99393489 L17.6221579,9.00083497 C17.9673338,9.00202673 18.246188,9.28281321 18.2450039,9.62798912 C18.2439132,9.94178541 18.0117595,10.2007704 17.7102229,10.2443727 L17.6178421,10.2508313 L16.247,10.245543 L16.247,11.999543 L17.37,12.0004012 C17.6837982,12.0004012 17.9435831,12.2316591 17.9882234,12.5330433 L17.995,12.6254012 C17.995,12.9391993 17.7637421,13.1989843 17.4623579,13.2436246 L17.37,13.2504012 L16.247,13.249543 L16.2475985,14.3649711 C16.2475985,14.6787693 16.0163406,14.9385543 15.7149564,14.9831945 L15.6225985,14.9899711 C15.3088003,14.9899711 15.0490154,14.7587133 15.0043751,14.4573291 L14.9975984,14.3649711 L14.9975984,9.61677709 C14.9986853,9.30298081 15.230839,9.04399582 15.5323756,9.00039353 L15.6247564,8.99393489 Z"
                            id="🎨-Color"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#1D9BF0"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#1D9BF0"
                        strokeWidth="2"
                      />{" "}
                      <path
                        d="M8 14C8.91221 15.2144 10.3645 16 12.0004 16C13.6362 16 15.0885 15.2144 16.0007 14"
                        stroke="#1D9BF0"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />{" "}
                      <path
                        d="M9 10.0112V10"
                        stroke="#1D9BF0"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />{" "}
                      <path
                        d="M15 10.0112V10"
                        stroke="#1D9BF0"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />{" "}
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="4"
                    stroke="#1D9BF0"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path d="M36.66,54.45H8.84A2.5,2.5,0,0,1,6.35,52V12.12A2.49,2.49,0,0,1,8.84,9.63H48.68a2.49,2.49,0,0,1,2.49,2.49v22.4" />

                      <line x1="6.35" y1="20.63" x2="51.17" y2="20.63" />

                      <line x1="16.46" y1="9.63" x2="16.46" y2="4.63" />

                      <line x1="40.42" y1="9.63" x2="40.42" y2="4.63" />

                      <circle cx="45.22" cy="45.44" r="12.43" />

                      <polyline points="45.22 36.7 45.22 45.82 49.57 49.16" />
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    fill="#1D9BF0"
                    width="23px"
                    height="23px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#1D9BF0"
                    strokeWidth="0.00032"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z" />{" "}
                    </g>
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
