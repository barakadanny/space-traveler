import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD_ROCKETS = 'rockets/LOAD_ROCKETS';
const RESERVE_ROCKET = 'rockets/reserve';
const CANCEL_ROCKET = 'rockets/cancel';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const displayRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const fetchRockets = async (dispatch) => {
  const res = await fetch(BASE_URL);
  const rockets = await res.json();
  console.log(rockets);
  dispatch(
    displayRockets(
      rockets.map((rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        desc: rocket.description,
        // img: rocket.flickr_images[0],
      })),
    ),
  );
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;

    default:
      return state;
  }
};

export default rocketReducer;
