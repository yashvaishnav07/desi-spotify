import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
    name: 'spotify',
    initialState: {
        spotifyPlaylist: null,
        currentPlaylistId: '0xTuEbHC6Y52fkHGxMwGBJ',
        isPlayingTrack: false,
        currentPlayingTrack: null,
        categoryPlaylist: {
            hiphop: null,
            soul: null,
        },
        recentlyPlayedTrack: null,
        searchData: null,
    },
    reducers: {
        addPlaylist: (state, action) => {
            state.spotifyPlaylist = action.payload;
        },
        addCurrentPlaylist: (state, action) => {
            state.currentPlaylist = action.payload;
        },
        addCurrentPlayingTrack: (state, action) => {
            state.currentPlayingTrack = action.payload;
        },
        addCurrentPlayingId: (state, action) => {
            state.currentPlaylistId = action.payload
        },
        addCategoryPlaylist: (state, action) => {
            state.categoryPlaylist[action.payload.name] = action.payload.data
        },
        addRecentlyPlayedTrack: (state, action) => {
            state.recentlyPlayedTrack = action.payload
        },
        setIsPlayingTrack: (state, action) => {
            state.isPlayingTrack = action.payload
        },
        setSearchData: (state, action) => {
            state.searchData = action.payload
        }
    },
})

export const { addPlaylist, addCurrentPlaylist, addCurrentPlayingTrack, addCurrentPlayingId, addCategoryPlaylist, addRecentlyPlayedTrack, setIsPlayingTrack, setSearchData } = spotifySlice.actions;
export default spotifySlice;