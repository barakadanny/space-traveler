import { createAsyncThunk } from "@reduxjs/toolkit";

// redux actions
const LOAD_MISSIONS = "missions/LOAD_MISSIONS";
const STATUS_MISSIONS = "missions/STATUS_MISSIONS";
const JOIN_MISSION = "missions/JOIN_MISSION";
const LEAVE_MISSION = "missions/LEAVE_MISSION";

const initialState = [
  {
    mission_id: "1",
    mission_name: "Mission 1",
    description: "Mission 1 description",
  },
  {
    mission_id: "2",
    mission_name: "Mission 2",
    description: "Mission 2 description",
  },
  {
    mission_id: "3",
    mission_name: "Mission 3",
    description: "Mission 3 description",
  },
];

// redux reducer
export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MISSIONS:
      return [...action.payload];
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
export const loadMissions = () => ({
  type: LOAD_MISSIONS,
  payload: initialState,
});

export const joinMission = (mission) => ({
  type: JOIN_MISSION,
  payload: mission,
});
