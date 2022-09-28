import { configureStore, combineReducers } from "@reduxjs/toolkit";
import missionReducer from "./misions/missions";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  // rocket: rocketReducer,
  mission: missionReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(thunk),
});

export default store;
