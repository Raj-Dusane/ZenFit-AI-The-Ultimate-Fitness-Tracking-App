import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
};

export const userSlice = createSlice({ 
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.currentUser = action.payload.user;
            localStorage.setItem("ZenFit-app-token", action.payload.token);
        },
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem("ZenFit-app-token");
        },
    },
});

export const {loginSuccess, logout} = userSlice.actions;

export default userSlice.reducer;