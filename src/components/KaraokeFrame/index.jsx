import React from "react";

// libraries

// components]
import SearchTemplate from "../SearchTemplate";
// import Sandbox from "../Sandbox";

// css
import "./karaokeFrame.css";

const KaraokeFrame = () => {
  return (
    <div className="karaoke-container flexcontainer">
      <div className="flexcontainer-block xs-12 md-6">
        <div className="sub-app color-pallete2">
          <div className="sub-app-content">
            <SearchTemplate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaraokeFrame;

// Dependencies
// components:
//     SearchTemplate
//     Sandbox
// functions:
//
