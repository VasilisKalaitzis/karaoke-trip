import React from "react";

// state managment
import { connect } from "react-redux";
import { fetchSongLyrics } from "../../actions/songActions";

import Searchbar from "../Searchbar";

const SearchTemplate = () => {
  const handleSearchChange = feedback => {
    switch (feedback.dataBound) {
      case "song-artist":
        break;
      case "song-title":
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
          // we are using callBack instead of Redux, because searchBar needs to
          // be a generic component
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
          // we are using callBack instead of Redux, because searchBar needs to
          // be a generic component
          callBack={handleSearchChange}
        />
      </div>

      {/* search button Here */}
      <div className="flexcontainer-block xs-12 md-6">
        <button className="beau-button margin-bottom container-margin">
          Search
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { fetchSongLyrics }
)(SearchTemplate);
