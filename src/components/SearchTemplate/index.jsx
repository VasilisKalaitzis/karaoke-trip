import React, { useState } from "react";

// state managment
import { connect } from "react-redux";
import { fetchSongLyrics } from "../../actions/songActions";

import Searchbar from "../Searchbar";

const SearchTemplate = props => {
  const [songArtist, setSongArtist] = useState("");
  const [songTitle, setSongTitle] = useState("");

  // why not Redux? Because this is faster and also
  // we need to keep the components bellow such as "Searchbar"
  // generic
  const handleSearchChange = feedback => {
    switch (feedback.dataBound) {
      case "song-artist":
        setSongArtist(feedback.text);
        break;
      case "song-title":
        setSongTitle(feedback.text);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flexcontainer">
      <div className="flexcontainer-block xs-12 md-6">
        {/* artist searchbar here */}
        <Searchbar
          key="searchbar-artist"
          placeholder="Artist"
          dataBound="song-artist"
          icon="users"
          callBack={handleSearchChange}
        />
      </div>
      {/* trackname searchbar here */}
      <div className="flexcontainer-block xs-12 md-6">
        <Searchbar
          key="searchbar-trackname"
          dataBound="song-title"
          placeholder="Trackname"
          icon="music"
          callBack={handleSearchChange}
        />
      </div>

      {/* search button Here */}
      <div className="flexcontainer-block xs-12 md-6">
        <button
          className="beau-button margin-bottom container-margin"
          onClick={() => props.fetchSongLyrics(songArtist, songTitle)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { fetchSongLyrics }
)(SearchTemplate);
