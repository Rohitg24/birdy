import React from "react";
import "../style/landing.css";

function LandingPage() {
  return (
    <div className="parent">
      {/*Banner header*/}
      <div className="header">
        <header className="side_nav">
          <div className="menu"></div>
        </header>
      </div>
      {/*Feed*/}
      <div className="Main">
        <div className="title">
          <h1>Home</h1>
        </div>
        <div className="twitter-field"></div>
        <div className="feed"></div>
      </div>
      {/*SideBar*/}
      <div className="Sidebar"></div>
    </div>
  );
}

export default LandingPage;
