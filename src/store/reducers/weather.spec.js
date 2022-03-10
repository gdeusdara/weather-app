import * as ActionTypes from '../../constants/actionTypes';
import reducer, { initialState } from './weather';

describe('Reducers::Location', () => {

  it('should set initial state by default', () => {
    const action = {type: 'unknown'};
    const expected = initialState;

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle GET_WEATHER_STATUS_START', () => {
    const appState = initialState;

    const action = {type: ActionTypes.GET_WEATHER_STATUS_START};
    const expected = {
      loading: true,
      weather: null,
      errorMessage: ''
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle GET_WEATHER_STATUS_SUCCESS', () => {
    const appState = {
      loading: true,
      weather: null,
      errorMessage: ''
    };

    const action = {
      type: ActionTypes.GET_WEATHER_STATUS_SUCCESS,
      weather: { current: {}, daily: [], hourly: [] },
    };

    const expected = {
      loading: false,
      weather: { current: {}, daily: [], hourly: [] },
      errorMessage: ''
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle GET_WEATHER_STATUS_FAILURE', () => {
    const appState = {
      loading: true,
      weather: null,
      errorMessage: ''
    };

    const action = {type: ActionTypes.GET_WEATHER_STATUS_FAILURE, error: 'Test error'};

    const expected = {
      loading: false,
      weather: null,
      errorMessage: 'Test error'
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
