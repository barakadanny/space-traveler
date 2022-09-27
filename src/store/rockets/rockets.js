const LOAD_ROCKETS = "rockets/load";

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;

    default:
      return state;
  }
};
export default rocketReducer;
