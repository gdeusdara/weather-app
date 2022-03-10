import * as ActionTypes from '../../constants/actionTypes';
import reducer, { initialState } from './location';

describe('Reducers::Location', () => {

  it('should set initial state by default', () => {
    const action = {type: 'unknown'};
    const expected = initialState;

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle GET_LOCATION_START', () => {
    const appState = initialState;

    const action = {type: ActionTypes.GET_LOCATION_START};
    const expected = {
      loading: true,
      location: null,
      errorMessage: ''
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle GET_LOCATION_SUCCESS', () => {
    const appState = {
      loading: true,
      location: null,
      errorMessage: ''
    };

    const action = {
      type: ActionTypes.GET_LOCATION_SUCCESS,
      location: { latitude: 0, longitude: 0 },
    };

    const expected = {
      loading: false,
      location: { latitude: 0, longitude: 0 },
      errorMessage: ''
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle GET_LOCATION_FAILURE', () => {
    const appState = {
      loading: true,
      location: null,
      errorMessage: ''
    };

    const action = {type: ActionTypes.GET_LOCATION_FAILURE, error: 'Test error'};

    const expected = {
      loading: false,
      location: null,
      errorMessage: 'Test error'
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
