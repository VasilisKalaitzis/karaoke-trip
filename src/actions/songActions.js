import {
  FETCH_NEW_SONG,
  RETRIEVE_EXISTING_SONG,
  FETCH_NEW_SONG_ERROR
} from "./types";

// fetch invoice by its ID
// request: server invoice
// parameters:
//        invoiceId intereger
export const fetchSongLyrics = (artist, title) => (dispatch, getState) => {
  let lyricsUrl = window.env_config.lyricsUrl;
  let { songHistory } = getState().songReducer;

  //pull from server only if the client doesn't have it
  if (
    songHistory[artist] !== undefined &&
    songHistory[artist][title] !== undefined
  ) {
    dispatch({
      type: RETRIEVE_EXISTING_SONG,
      payload: {
        artist: artist,
        title: title
      }
    });
  } else {
    fetch(lyricsUrl + "/" + artist + "/" + title)
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json(); //we only get here if there is no error
      })
      .then(data => {
        dispatch({
          type: FETCH_NEW_SONG,
          payload: {
            artist: artist,
            title: title,
            lyrics: data.lyrics
          }
        });
      })
      .catch(err => {
        err.text().then(errorMessage => {
          //   display the error
          dispatch({
            type: FETCH_NEW_SONG_ERROR,
            payload: {
              error: "song lyrics couldn't be found"
            }
          });
        });
      });
  }
};
