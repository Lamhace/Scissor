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
    login: (state, action) => {
      state.isLoggedIn = action.payload;
      state.isLoggedIn = true
    },
  },
});

export const { setUsername, setPassword, login } = loginSlice.actions;
export default loginSlice.reducer;
