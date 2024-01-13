import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import spotifySlice from "./spotifySlice";

const appStore = configureStore({
    reducer: {
        user: userSlice.reducer,
        spotify: spotifySlice.reducer,
    }
})

export default appStore;