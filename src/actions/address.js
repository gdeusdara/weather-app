import * as types from "../constants/actionTypes";
import api from "../services/api";

const getAddressStart = () => {
  return {
    type: types.GET_ADDRESS_START
  };
};

const getAddressSuccess = (data) => {
  return {
    type: types.GET_ADDRESS_SUCCESS,
    data
  };
};

const getAddressFailure = error => {
  return {
    type: types.GET_ADDRESS_FAILURE,
    error
  };
};

export function getAddress(location) {
  return async dispatch => {
    try {
      dispatch(getAddressStart());
      const response = await api.get(`/geo/1.0/reverse?lat=${location.latitude}&lon=${location.longitude}&limit=5`);

      if (response.status !== 200) {
        dispatch(getAddressFailure('Ocorreu um erro ao obter informações do tempo'));
        return
      }

      dispatch(getAddressSuccess(response.data));
    } catch (err) {
      dispatch(getAddressFailure('Ocorreu um erro ao obter informações do tempo'));
    }
  };
}
