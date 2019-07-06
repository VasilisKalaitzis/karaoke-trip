import {
  FETCH_NEW_SONG,
  RETRIEVE_EXISTING_SONG,
  FETCH_NEW_SONG_ERROR
} from "../actions/types";

const initialState = {
  songHistory: {},
  currentSong: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEW_SONG:
      // fetch new song and also casched it
      let newSongHistory = state.songHistory;
      if (newSongHistory[action.payload.artist] === undefined) {
        // when it is the first time that we search for this artist
        newSongHistory[action.payload.artist] = {};
      }

      newSongHistory[action.payload.artist][action.payload.title] =
        action.payload;

      return {
        ...state,
        songHistory: newSongHistory,
        currentSong: action.payload
      };
    case RETRIEVE_EXISTING_SONG:
      // retrieve song from cached list
      return {
        ...state,
        currentSong:
          state.songHistory[action.payload.artist][action.payload.title]
      };
    case FETCH_NEW_SONG_ERROR:
      //   Tech Debt: bad way to handle the error
      return {
        ...state,
        currentSong: { error: action.payload.error }
      };
    default:
      return state;
  }
}
