import { createAsyncThunk } from "@reduxjs/toolkit";

const LOAD_ROCKETS = "rockets/load";
const RESERVE_ROCKET = "rockets/reserve";
const CANCEL_ROCKET = "rockets/cancel";
const BASE_URL = "https://api.spacexdata.com/v3/rockets";

// const displayRockets = (payload) => ({
//   type: LOAD_ROCKETS,
//   payload,
// });

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;

    default:
      return state;
  }
};

export const fetchRockets = createAsyncThunk(LOAD_ROCKETS, async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  // console.log("check here danny:", data);

  const rockets = Object.keys(data).map((key) => ({
    ...data[key][0],
    rocket_id: key,
  }));
  return rockets;
  console.log("check here danny:", rockets);
});

export default rocketReducer;
