import {
  GET_WEATHER_STATUS_START,
  GET_WEATHER_STATUS_SUCCESS,
  GET_WEATHER_STATUS_FAILURE,
} from '../../constants/actionTypes';

const initialState = {
  loading: false,
  weather: null,
  errorMessage: ''
}

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_STATUS_START:
      return {
        ...state,
        loading: true
      };
    case GET_WEATHER_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.weather
      };
    case GET_WEATHER_STATUS_FAILURE:
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
