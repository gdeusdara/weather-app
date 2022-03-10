import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation, getWeatherStatus, getAddress } from '../actions';

const weatherHooks = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location.data);
  const weather = useSelector(state => state.weather.data);
  const address = useSelector(state => state.address.data);

  useEffect(() => {
    dispatch(getLocation());
  }, [])

  useEffect(() => {
    console.log(location)
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

}

export default weatherHooks;
