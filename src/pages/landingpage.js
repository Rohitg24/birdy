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
              <div className="icon-list"></div>
              <button className="tweet-btn">Tweet</button>
            </div>
          </div>
        </div>
        <div className="feed"></div>
      </div>
      {/*SideBar*/}
      <div className="Sidebar"></div>
    </div>
  );
}

export default LandingPage;
