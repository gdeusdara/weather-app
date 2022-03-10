import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default initialState => {
  const middlewares = [reduxImmutableStateInvariant(), thunk];
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );

  return {store};
};
