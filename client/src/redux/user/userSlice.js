import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state => {
            state.loading = true;
            state.error = null;
        }),
        signInSuccess: ((state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        }),
        signInFailure: ((state, action) => {
            state.error = action.payload;
            state.loading = false;
        }),
    }
});


export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;