import * as types from "../constants/actionTypes";
import api from "../services/api";

const getWeatherStatusStart = () => {
  return {
    type: types.GET_WEATHER_STATUS_START
  };
};

const getWeatherStatusSuccess = (location) => {
  return {
    type: types.GET_WEATHER_STATUS_SUCCESS,
    location
  };
};

const getWeatherStatusFailure = error => {
  return {
    type: types.GET_WEATHER_STATUS_FAILURE,
    error
  };
};

export function getWeatherStatus(location) {
  return async dispatch => {
    try {
      dispatch(getWeatherStatusStart());
      const response = await api.get(`/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}`);

      console.log(response)
      if (response.status !== 200) {
        dispatch(getWeatherStatusFailure('Não foi permitido o acesso á localização'));
        return
      }

      dispatch(getWeatherStatusSuccess(response.data));
    } catch (err) {
      dispatch(getWeatherStatusFailure('Ocorreu um erro tentar acessar localização'));
    }
  };
}
