import {
  GET_LOCATION_START,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILURE,
} from '../../constants/actionTypes';

import basicReducer from './basicReducer';

const { initialState, reducer } = basicReducer({
  start: GET_LOCATION_START,
  success: GET_LOCATION_SUCCESS,
  failure: GET_LOCATION_FAILURE,
})

export default reducer

export { initialState };

