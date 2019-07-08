import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// css
import "./lyricsBox.scss";

const LyricsBox = props => {
  // which line from the lyrics to display
  const [lineIndex, setLineIndex] = useState(0);
  // array with the lyrics splitted into lines
  const [lyricsArray, setLyricsArray] = useState([]);

  // we need to reference the lyrics' element in order to restart the animation
  let animatedField = null;

  useEffect(() => {
    // Component Did Update
    newSongInitialize();
  }, [props.artist, props.title]);

  useEffect(() => {
    // the interval's job is to pull the next line of the lyrics
    const interval = setTimeout(getNextLine, 3000);
    // Component Will Unmount
    return () => clearTimeout(interval);
  }, [lineIndex, lyricsArray]);

  // helper function to change song
  const newSongInitialize = () => {
    setLineIndex(0);
    setLyricsArray(splitStringIntoLines(props.lyrics));
    // edge case when the song doesn't have lyrics
    if (lyricsArray === null) {
      setLyricsArray([]);
    }

    // restart the animation
    animatedField.classList.remove("lyrics-box-text-animation");
    animatedField.classList.add("lyrics-box-text-animation");
  };

  // retrieve the next line of the song
  const getNextLine = () => {
    if (lyricsArray.length - 1 > lineIndex) {
      setLineIndex(lineIndex + 1);
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
