import * as types from "../constants/actionTypes";
import * as Location from 'expo-location';

const getLocationStart = () => {
  return {
    type: types.GET_LOCATION_START
  };
};

const getLocationSuccess = (res) => {
  return {
    type: types.GET_LOCATION_SUCCESS,
    res
  };
};

const getLocationFailure = () => {
  return {
    type: types.GET_LOCATION_FAILURE,
  };
};

export function getLocation() {
  return async dispatch => {
    try {
      dispatch(getLocationStart());
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        dispatch(getLocationFailure());
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      dispatch(getLocationSuccess(location));
    } catch (err) {
      dispatch(getLocationFailure());
    }
  };
}

export function getLocationes(list) {
  return dispatch => {
    list.forEach(() => {
      dispatch(getLocation());
    });
  };
}
