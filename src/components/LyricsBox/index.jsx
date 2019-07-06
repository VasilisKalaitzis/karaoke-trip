import React, { useState, useEffect } from "react";

// css
import "./lyricsBox.css";

const LyricsBox = props => {
  var timer;

  // useEffect(() => {
  //   // Component Did Mount
  //   timer = null;

  //   // Component Will Unmount
  //   return () => {
  //     debugger;
  //     clearTimeout(timer);
  //   };
  // });

  // useEffect(() => {
  //   // Component Did Update
  //   clearTimeout(timer);
  //   this.timer = setTimeout(this.startSearch, 1100);
  // }, [props.currentSong]);

  return (
    <div className="lyrics-box">
      <React.Fragment>
        <div className="flexcontainer-block xs-12 md-6">
          {/* Artist Name */}
          <div className="lyrics-box-title">
            <span>{props.currentSong.artist}</span>
          </div>
        </div>

        {/* Lyrics */}
        <div className="flexcontainer-block xs-12 md-6">
          <div className="lyrics-box-text">
            <span>{props.currentSong.lyrics}</span>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default LyricsBox;
