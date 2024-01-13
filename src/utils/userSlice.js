import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userInfo: null,
    },
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload
        },
        addUserInfo: (state, action) => {
            state.userInfo = action.payloaduserInfo = action.payload
        }
    },
})

export const { addToken, addUserInfo } = userSlice.actions;
export default userSlice;