import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    logged: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder)=> {

    }
})

export default userSlice.reducer;