import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from '../actions/location';

const weatherHooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
  }, [])
}

export default weatherHooks;
