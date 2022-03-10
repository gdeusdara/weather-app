import {
  GET_ADDRESS_START,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAILURE,
} from '../../constants/actionTypes';

import basicReducer from './basicReducer';

const { initialState, reducer } = basicReducer({
  start: GET_ADDRESS_START,
  success: GET_ADDRESS_SUCCESS,
  failure: GET_ADDRESS_FAILURE
})

export default reducer

export { initialState };
