import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer";
import isNavOpenReducer from './HamburgerReducer'

const store = configureStore({
  reducer: {
    loginAuthenticator: LoginReducer,
    isNavOpen: isNavOpenReducer
  },
});

export default store;
