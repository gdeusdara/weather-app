import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation, getWeatherStatus } from '../actions';

const weatherHooks = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location.location);

  useEffect(() => {
    dispatch(getLocation());
  }, [])

  useEffect(() => {
    console.log(location)
    if (location) {
      dispatch(getWeatherStatus(location))
    }
  }, [location])

}

export default weatherHooks;
