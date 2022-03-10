import basicReducer from '.';

const { reducer, initialState } = basicReducer();

describe('Reducers::Location', () => {

  it('should set initial state by default', () => {
    const action = {type: 'unknown'};
    const expected = initialState;

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle START', () => {
    const appState = initialState;

    const action = {type: 'START'};
    const expected = {
      loading: true,
      data: null,
      errorMessage: ''
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle SUCCESS', () => {
    const appState = {
      loading: true,
      data: null,
      errorMessage: ''
    };

    const action = {
      type: 'SUCCESS',
      data: { test: true },
    };

    const expected = {
      loading: false,
      data: { test: true },
      errorMessage: ''
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle FAILURE', () => {
    const appState = {
      loading: true,
      data: null,
      errorMessage: ''
    };

    const action = {type: 'FAILURE', error: 'Test error'};

    const expected = {
      loading: false,
      data: null,
      errorMessage: 'Test error'
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
