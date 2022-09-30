import { createAsyncThunk } from '@reduxjs/toolkit';

// redux actions
const LOAD_MISSIONS = 'missions/LOAD_MISSIONS';
const JOIN_MISSION = 'missions/JOIN_MISSION';
const LEAVE_MISSION = 'missions/LEAVE_MISSION';

const initialState = [];

// redux reducer
export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case 'missions/LOAD_MISSIONS/fulfilled':
      // return [...action.payload];
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.mission_id) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.mission_id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    default:
      return state;
  }
}

// redux actions
export const loadMissions = createAsyncThunk(LOAD_MISSIONS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missions = Object.keys(data).map((key) => ({
    ...data[key][0],
    mission_id: key,
  }));
  return missions;
});

export const joinMission = (mission) => ({
  type: JOIN_MISSION,
  payload: mission,
});
