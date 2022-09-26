const LOAD_MISSIONS = 'missions/load';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
  }
};
export default missionReducer;
