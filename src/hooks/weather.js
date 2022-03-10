import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from '../actions/location';

const weatherHooks = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location.location);

  useEffect(() => {
    dispatch(getLocation());
  }, [])

  useEffect(() => {
    console.log(location)
  }, [location])

}

export default weatherHooks;
