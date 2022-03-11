import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation, getWeatherStatus, getAddress } from '../actions';

const weatherHooks = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location.data);
  const weather = useSelector(state => state.weather.data);
  const address = useSelector(state => state.address.data);

  const locationLoading = useSelector(state => state.location.loading);
  const weatherLoading = useSelector(state => state.weather.loading);
  const addressLoading = useSelector(state => state.address.loading);

  const locationError = useSelector(state => state.location.errorMessage);
  const weatherError = useSelector(state => state.weather.errorMessage);
  const addressError = useSelector(state => state.address.errorMessage);

  const tryAgain = () => {
    if (location) {
      dispatch(getWeatherStatus(location))
      dispatch(getAddress(location))
    } else {
      dispatch(getLocation());
    }
  }

  useEffect(() => {
    dispatch(getLocation());
  }, [])

  useEffect(() => {
    if (location) {
      dispatch(getWeatherStatus(location))
      dispatch(getAddress(location))
    }
  }, [location])

  useEffect(() => {
    console.log('weather', weather)
  }, [weather])

  useEffect(() => {
    console.log('address', address)
  }, [address])

  return {
    location,
    weather,
    address,
    locationLoading,
    weatherLoading,
    addressLoading,
    locationError,
    weatherError,
    addressError,
    tryAgain
  }

}

export default weatherHooks;
