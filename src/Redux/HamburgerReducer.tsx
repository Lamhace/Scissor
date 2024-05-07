import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
};

const hamburgerReducer = createSlice({
  name: "hamburgerReducer",
  initialState,
  reducers: {
    openNav: (state) => {
      state.isNavOpen = true;
    },
    closeNav: (state) => {
      state.isNavOpen = false;
    },
  },
});
export const { openNav, closeNav } = hamburgerReducer.actions;
export default hamburgerReducer.reducer;
