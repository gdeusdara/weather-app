import {combineReducers} from 'redux';
import location from './location';
import weather from './weather';
import address from './address';

const rootReducer = combineReducers({
  location,
  weather,
  address
});

export default rootReducer;
