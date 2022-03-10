import * as ActionTypes from "../constants/actionTypes";
import * as ActionCreators from "./location";

describe("Location", () => {
  beforeAll(() => {});
  afterAll(() => {});

  it("should create an action to get location", () => {
    const dispatch = jest.fn();

    const expected = {
      type: ActionTypes.GET_LOCATION_START
    };

    // we expect this to return a function since it is a thunk
    expect(typeof ActionCreators.getLocation()).toEqual("function");
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.getLocation()(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });
});
