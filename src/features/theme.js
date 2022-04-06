import {createSlice } from "@reduxjs/toolkit";


const initialStateValue = ""; 
 export const themeSlice = createSlice({
    name: "theme",
    initialState: {value: initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        }
    }
});

export const {changeColor} = themeSlice.actions;

export default themeSlice.reducer;