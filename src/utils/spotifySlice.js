import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
    name: 'spotify',
    initialState: {
        spotifyPlaylist: null,
        currentPlaylistId: '0xTuEbHC6Y52fkHGxMwGBJ',
        currentPlaylist:null,
        currentPlayingTrack: null
    },
    reducers: {
        addPlaylist: (state, action) => {
            state.spotifyPlaylist = action.payload;
        },
        addCurrentPlaylist: (state,action) => {
            state.currentPlaylist = action.payload;
        },
        addCurrentPlayingTrack: (state,action) => {
            state.currentPlayingTrack = action.payload;
        },
        addCurrentPlayingId: (state,action) => {
            state.currentPlaylistId = action.payload
        }
    },
})

export const { addPlaylist, addCurrentPlaylist, addCurrentPlayingTrack, addCurrentPlayingId } = spotifySlice.actions;
export default spotifySlice;