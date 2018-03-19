import { fromJS } from 'immutable';
import {
  LOAD_CARDS_SUCCESS,
  LOAD_CARDS,
  LOAD_CARDS_ERROR,
  NEXT_PAGE
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  cards: [],
  page: 1
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD_CARDS:
    return state.set('loading', true).set('error', false);
  case LOAD_CARDS_SUCCESS: {
    const cards = state.get('cards').concat(action.cards);
    return state.set('cards', cards).set('loading', false);
  }
  case LOAD_CARDS_ERROR:
    return state.set('error', action.error).set('loading', false);
  case NEXT_PAGE: {
    return state.set('page', state.get('page') + 1);
  }
  default:
    return state;
  }
};

export default appReducer;
