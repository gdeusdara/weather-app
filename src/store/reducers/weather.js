import {
  GET_WEATHER_STATUS_START,
  GET_WEATHER_STATUS_SUCCESS,
  GET_WEATHER_STATUS_FAILURE,
} from '../../constants/actionTypes';

import basicReducer from './basicReducer';

const { initialState, reducer } = basicReducer({
  start: GET_WEATHER_STATUS_START,
  success: GET_WEATHER_STATUS_SUCCESS,
  failure: GET_WEATHER_STATUS_FAILURE,
})

export default reducer

export { initialState };
