const BASE_URL = 'https://api.spacexdata.com/v3/missions';
const LOAD_MISSIONS = 'missions/LOAD_MISSIONS';
const JOIN_MISSION = 'sissions/JOIN_MISSION';
const LEAVE_MISSION = 'sissions/LEAVE_MISSION';

const displayMissions = (payload) => ({
  type: LOAD_MISSIONS,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export const fetchMissions = async (dispatch) => {
  const res = await fetch(BASE_URL);
  const missions = await res.json();
  console.log(missions);
  dispatch(
    displayMissions(
      missions.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        desc: mission.description,
      })),
    ),
  );
};

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return {
          ...mission,
          reserved: true,
        };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }

        return {
          ...mission,
          reserved: false,
        };
      });
    default:
      return state;
  }
};
export default missionReducer;
