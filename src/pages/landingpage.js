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
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="rgb(214 217 219)"
            >
              <path d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z" />
            </svg>
          </div>
          <div className="menu">
            <a href="#" className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                width="25px"
                height="25px"
                fill="rgb(214 217 219)"
              >
                <g>
                  <path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z" />
                  <g>
                    <path d="M362.667,383.841v128H448c35.346,0,64-28.654,64-64V253.26c0.005-11.083-4.302-21.733-12.011-29.696l-181.29-195.99    c-31.988-34.61-85.976-36.735-120.586-4.747c-1.644,1.52-3.228,3.103-4.747,4.747L12.395,223.5    C4.453,231.496-0.003,242.31,0,253.58v194.261c0,35.346,28.654,64,64,64h85.333v-128c0.399-58.172,47.366-105.676,104.073-107.044    C312.01,275.383,362.22,323.696,362.667,383.841z" />
                    <path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z" />
                  </g>
                </g>
              </svg>
            </a>
            <a href="#" className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24.00 24.00"
                fill="rgb(214 217 219)"
                stroke="#ffffff"
                strokeWidth="0"
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
                    d="M21 7.25004H18L18.77 4.18004C18.8177 3.98643 18.7866 3.78179 18.6835 3.61113C18.5803 3.44047 18.4136 3.31777 18.22 3.27004C18.0264 3.2223 17.8217 3.25342 17.6511 3.35657C17.4804 3.45971 17.3577 3.62643 17.31 3.82004L16.45 7.25004H10L10.77 4.18004C10.8177 3.98643 10.7866 3.78179 10.6835 3.61113C10.5803 3.44047 10.4136 3.31777 10.22 3.27004C10.0264 3.2223 9.82175 3.25342 9.65109 3.35657C9.48043 3.45971 9.35774 3.62643 9.31 3.82004L8.41 7.25004H5C4.80109 7.25004 4.61032 7.32905 4.46967 7.46971C4.32902 7.61036 4.25 7.80112 4.25 8.00004C4.25 8.19895 4.32902 8.38971 4.46967 8.53037C4.61032 8.67102 4.80109 8.75004 5 8.75004H8L6.37 15.25H3C2.80109 15.25 2.61032 15.3291 2.46967 15.4697C2.32902 15.6104 2.25 15.8011 2.25 16C2.25 16.1989 2.32902 16.3897 2.46967 16.5304C2.61032 16.671 2.80109 16.75 3 16.75H6L5.23 19.82C5.18226 20.0136 5.21339 20.2183 5.31653 20.3889C5.41968 20.5596 5.58639 20.6823 5.78 20.73C5.97361 20.7778 6.17825 20.7466 6.34891 20.6435C6.51957 20.5404 6.64226 20.3736 6.69 20.18L7.55 16.75H14L13.23 19.82C13.1823 20.0136 13.2134 20.2183 13.3165 20.3889C13.4197 20.5596 13.5864 20.6823 13.78 20.73C13.9736 20.7778 14.1783 20.7466 14.3489 20.6435C14.5196 20.5404 14.6423 20.3736 14.69 20.18L15.55 16.75H19C19.1989 16.75 19.3897 16.671 19.5303 16.5304C19.671 16.3897 19.75 16.1989 19.75 16C19.75 15.8011 19.671 15.6104 19.5303 15.4697C19.3897 15.3291 19.1989 15.25 19 15.25H16L17.63 8.75004H21C21.1989 8.75004 21.3897 8.67102 21.5303 8.53037C21.671 8.38971 21.75 8.19895 21.75 8.00004C21.75 7.80112 21.671 7.61036 21.5303 7.46971C21.3897 7.32905 21.1989 7.25004 21 7.25004ZM16 8.75004L14.37 15.25H8L9.63 8.75004H16Z"
                    fill="rgb(214 217 219)"
                  />{" "}
                </g>
              </svg>
            </a>
            <a href="#" className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(214 217 219)"
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                id="notification-copy"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    id="primary"
                    d="M19.38,14.38a2.12,2.12,0,0,1,.62,1.5h0A2.12,2.12,0,0,1,17.88,18H6.12A2.12,2.12,0,0,1,4,15.88H4a2.12,2.12,0,0,1,.62-1.5L6,13V9a6,6,0,0,1,6-6h0a6,6,0,0,1,6,6v4ZM15,18H9a3,3,0,0,0,3,3h0A3,3,0,0,0,15,18Z"
                  />
                </g>
              </svg>
            </a>
            <a href="#" className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 1024 1024"
                fill="rgb(214 217 219)"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="rgb(214 217 219)"
                    d="M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
                  />

                  <path
                    fill="rgb(214 217 219)"
                    d="M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
                  />
                </g>
              </svg>
            </a>
            <a href="#" className="item">
              <svg
                fill="rgb(214 217 219)"
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title />{" "}
                  <g id="about">
                    {" "}
                    <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />{" "}
                    <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />{" "}
                  </g>{" "}
                </g>
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
            <input type="textarea" placeholder="What's happening?" />
            <div className="text-bar">
              <div className="icon-list">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 192 192"
                    fill="none"
                    stroke="#1D9BF0"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        stroke="#1D9BF0"
                        strokeWidth="12"
                        d="M30 40c0-5.523 4.477-10 10-10h112c5.523 0 10 4.477 10 10v112c0 5.523-4.477 10-10 10H40c-5.523 0-10-4.477-10-10V40Z"
                      />

                      <path
                        stroke="#1D9BF0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="12"
                        d="m30 138 34-34 24 24 40-40 34 34"
                      />
                    </g>
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
