import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "loginAuthenticator",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    logIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { setUsername, setPassword, logOut, logIn } = loginSlice.actions;
export default loginSlice.reducer;
