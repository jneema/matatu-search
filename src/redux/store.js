import { configureStore } from "@reduxjs/toolkit";
import matatuReducer from "./slices/matatu";

const store = configureStore({
  reducer: {
    matatus: matatuReducer,
  },
});

export default store;
