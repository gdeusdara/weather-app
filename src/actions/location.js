import * as types from "../constants/actionTypes";
import * as Location from 'expo-location';

const getLocationStart = () => {
  return {
    type: types.GET_LOCATION_START
  };
};

const getLocationSuccess = (location) => {
  return {
    type: types.GET_LOCATION_SUCCESS,
    location
  };
};

const getLocationFailure = error => {
  return {
    type: types.GET_LOCATION_FAILURE,
    error
  };
};

export function getLocation() {
  return async dispatch => {
    try {
      dispatch(getLocationStart());
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        dispatch(getLocationFailure('Não foi permitido o acesso á localização'));
        return
      }

      let location = await Location.getCurrentPositionAsync({});

      if (location.coords) {
        dispatch(getLocationSuccess(location.coords));
        return
      }

      dispatch(getLocationFailure('Não foi possível saber a localização atual, ligue a localização do celular'));

    } catch (err) {
      dispatch(getLocationFailure('Ocorreu um erro tentar acessar localização'));
    }
  };
}