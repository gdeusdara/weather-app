import {
  GET_LOCATION_START,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILURE,
} from '../../constants/actionTypes';

const initialState = {
  loading: false,
  location: null,
  errorMessage: ''
}

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION_START:
      return {
        ...state,
        loading: true
      };
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        location: action.location
      };
    case GET_LOCATION_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error || ''
      };
    default:
      return state;
  }
}

export { initialState };
