import React from "react";

// state managment
import { connect } from "react-redux";

// libraries

// components]
import SearchTemplate from "../SearchTemplate";
import LyricsBox from "../LyricsBox";

// css
import styles from "./karaokeFrame.module.scss";

const KaraokeFrame = props => {
  return (
    <div className={styles.karaokeContainer + " flexcontainer"}>
      <div className="flexcontainer-block xs-12 md-6">
        <div className="sub-app color-pallete2">
          <div className="sub-app-content">
            <SearchTemplate />
            {/* check whether you need to display an console.error or the song lyrics or nothing */}
            {props.currentSong.error !== undefined ? (
              <div className="flexcontainer">
                <div className="flexcontainer-block xs-12 md-6">
                  <span>{props.currentSong.error}</span>
                </div>
              </div>
            ) : Object.entries(props.currentSong).length !== 0 ? (
              // Display the lyrics if there's no errors and the lyrics are available
              <LyricsBox
                key={props.currentSong.artist + props.currentSong.title}
                artist={props.currentSong.artist}
                title={props.currentSong.title}
                lyrics={props.currentSong.lyrics}
              />
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
//     LyricsBox
// functions:
//
