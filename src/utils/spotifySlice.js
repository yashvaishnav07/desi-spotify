import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
    name: 'spotify',
    initialState: {
        spotifyPlaylist: null,
        currentPlaylistId: '0xTuEbHC6Y52fkHGxMwGBJ',
        currentPlaylist:null,
        currentPlayingTrack: null,
        categoryPlaylist: {
            hiphop: null,
            soul: null,
        }
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
        },
        addCategoryPlaylist: (state,action) => {
            state.categoryPlaylist[action.payload.name] = action.payload.data
        }
    },
})

export const { addPlaylist, addCurrentPlaylist, addCurrentPlayingTrack, addCurrentPlayingId, addCategoryPlaylist } = spotifySlice.actions;
export default spotifySlice;