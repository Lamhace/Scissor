import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer";

const store = configureStore({
  reducer: {
    loginAuthenticator: LoginReducer,
  },
});

export default store;
