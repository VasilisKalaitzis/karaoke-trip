import { FETCH_NEW_SONG, RETRIEVE_EXISTING_SONG } from "../actions/types";

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
    default:
      return state;
  }
}
