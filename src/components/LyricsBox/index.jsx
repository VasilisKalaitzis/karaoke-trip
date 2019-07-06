import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// css
import "./lyricsBox.css";

const LyricsBox = props => {
  // which line from the lyrics to display
  const [lineIndex, setLineIndex] = useState(0);
  // array with the lyrics splitted into lines
  const [lyricsArray, setLyricsArray] = useState([]);

  let scopedLyricsArray = [];
  let scopedLineIndex = 0;
  // we need to reference the lyrics' element in order to restart the animation
  let animatedField = null;

  useEffect(() => {
    // Component Did Update
    newSongInitialize();
    const interval = setInterval(getNextLine, 3000);

    // Component Will Unmount
    return () => clearInterval(interval);
  }, [props.artist, props.title]);

  // helper function to change song
  const newSongInitialize = () => {
    scopedLineIndex = 0;
    scopedLyricsArray = splitStringIntoLines(props.lyrics);
    // edge case when the song doesn't have lyrics
    if (scopedLyricsArray === null) {
      scopedLyricsArray = [];
    }

    setLineIndex(scopedLineIndex);
    setLyricsArray(scopedLyricsArray);

    // restart the animation
    animatedField.classList.remove("lyrics-box-text-animation");
    animatedField.classList.add("lyrics-box-text-animation");
  };

  // retrieve the next line of the song
  const getNextLine = () => {
    if (scopedLyricsArray.length - 1 > scopedLineIndex) {
      scopedLineIndex++;
      setLineIndex(scopedLineIndex);
    }
  };

  // split lyrics into lines
  const splitStringIntoLines = inputString => {
    return inputString.match(/[^\r\n]+/g);
  };

  return (
    <div className="flexcontainer">
      <div className="flexcontainer-block xs-12 lyrics-box">
        {/* Artist Name */}
        <span className="lyrics-box-title">{props.artist}</span>
      </div>
      {/* Lyrics */}
      <div className="flexcontainer-block xs-12 align-items-left">
        <div className="lyrics-box-text-animation">
          <span
            className="lyrics-box-text "
            data-text={lyricsArray[lineIndex]}
            ref={lyricsField => {
              animatedField = lyricsField;
            }}
          >
            {lyricsArray[lineIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};

LyricsBox.propTypes = {
  artist: PropTypes.string,
  title: PropTypes.string,
  lyrics: PropTypes.string
};

LyricsBox.defaultProps = {
  lyrics: "Invalid Lyrics",
  title: "Invalid Title",
  artist: "Invalid Artist"
};

export default LyricsBox;
