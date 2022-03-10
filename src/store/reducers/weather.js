import {
  GET_WEATHER_STATUS_START,
  GET_WEATHER_STATUS_SUCCESS,
  GET_WEATHER_STATUS_FAILURE,
} from '../../constants/actionTypes';

const initialState = {}

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_STATUS_START:
      return state;
    case GET_WEATHER_STATUS_SUCCESS:
      return state;
    case GET_WEATHER_STATUS_FAILURE:
      return state;
    default:
      return state;
  }
}
