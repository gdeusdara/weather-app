const basicReducer = (actions = { start: 'START', success: 'SUCCESS', failure: 'FAILURE' }) => {
  const initialState = {
    loading: false,
    data: null,
    errorMessage: ''
  }

  function reducer(state = initialState, action) {
    switch (action.type) {
      case actions.start:
        return {
          ...state,
          loading: true
        };
      case actions.success:
        return {
          ...state,
          loading: false,
          data: action.data
        };
      case actions.failure:
        return {
          ...state,
          loading: false,
          errorMessage: action.error || ''
        };
      default:
        return state;
    }
  }

  return { initialState, reducer };
}

export default basicReducer;
