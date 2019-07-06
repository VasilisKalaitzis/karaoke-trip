import React from "react";

// state managment
import { connect } from "react-redux";

// libraries

// components]
import SearchTemplate from "../SearchTemplate";
import LyricsBox from "../LyricsBox";

// css
import "./karaokeFrame.css";

const KaraokeFrame = props => {
  return (
    <div className="karaoke-container flexcontainer">
      <div className="flexcontainer-block xs-12 md-6">
        <div className="sub-app color-pallete2">
          <div className="sub-app-content flexcontainer">
            <SearchTemplate />
            {/* check whether you need to display an console.error or the song lyrics or nothing */}
            {props.currentSong.error !== undefined ? (
              <div className="flexcontainer-block xs-12 md-6">
                <span>{props.currentSong.error}</span>
              </div>
            ) : Object.entries(props.currentSong).length !== 0 ? (
              <LyricsBox currentSong={props.currentSong} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentSong: state.songReducer.currentSong
});

export default connect(
  mapStateToProps,
  null
)(KaraokeFrame);

// Dependencies
// components:
//     SearchTemplate
//     Sandbox
// functions:
//
