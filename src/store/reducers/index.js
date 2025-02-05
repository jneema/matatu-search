import { combineReducers } from "@reduxjs/toolkit";
import routesReducer from "./matatus/matatus";

const rootReducer = combineReducers({
  routes: routesReducer,
});

export default rootReducer;
