import {
  GET_ADDRESS_START,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAILED,
} from '../../constants/actionTypes';

const initialState = {}

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS_START:
      return state;
    case GET_ADDRESS_SUCCESS:
      return state;
    case GET_ADDRESS_FAILED:
      return state;
    default:
      return state;
  }
}
