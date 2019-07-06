import { FETCH_SONG_LYRICS } from "../actions/types";

const initialState = {
    songs: {},
    current_song: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SONG_LYRICS:
            //adding an invoice to the invoices list
            return {
                ...state
            };
        default:
            return state;
    }
}
