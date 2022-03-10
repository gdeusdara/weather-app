import * as ActionTypes from "../constants/actionTypes";
import * as ActionCreators from "./weather";

describe("Weather", () => {
  beforeAll(() => {});
  afterAll(() => {});

  it("should create an action to get weather", () => {
    const dispatch = jest.fn();

    const expected = {
      type: ActionTypes.GET_WEATHER_STATUS_START
    };

    // we expect this to return a function since it is a thunk
    expect(typeof ActionCreators.getWeatherStatus()).toEqual("function");
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.getWeatherStatus()(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });
});
