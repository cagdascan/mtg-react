import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from './containers/App/reducer';

const routeInitialState = fromJS({
  location: null
});

const routeReducer = (state = routeInitialState, action) => {
  switch (action.type) {
  case LOCATION_CHANGE:
    return state.merge({
      location: action.payload
    });
  default:
    return state;
  }
};

const createReducer = injectedReducers => {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    ...injectedReducers
  });
};

export default createReducer;
