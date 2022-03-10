import {
  GET_LOCATION_START,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILURE,
} from '../../constants/actionTypes';

const initialState = {}

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION_START:
      return state;
    case GET_LOCATION_SUCCESS:
      return state;
    case GET_LOCATION_FAILURE:
      return state;
    default:
      return state;
  }
}
