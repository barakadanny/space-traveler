/*eslint-disable*/
import store from "../redux/configureStore";
import { fetchRockets, bookRocket } from "../store/rockets/rockets";

describe("Redux store", () => {
  it("should have the correct initial state", () => {
    expect(store.getState()).toEqual({
      rockets: [],
      mission: {
        mission: [],
        status: "idle",
      },
    });
  });

  it("Fetch rockets", async () => {
    await store.dispatch(fetchRocket());
    expect(store.getState().rockets.length).toEqual(4);
  });

  it("Book a rocket", () => {
    store.dispatch(reserveRocket(1));
    expect(store.getState().rockets[0].reservation).toEqual(true);
  });
});
