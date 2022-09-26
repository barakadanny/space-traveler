// import { configureStore } from '@reduxjs/toolkit';

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = configureStore({
//   reducer: counterReducer,
// });

// export default store;

const LOAD_ROCKETS = 'rockets/load';

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;
  }
};
export default rocketReducer;
