import { fromJS } from 'immutable';
import {
  LOAD_CARD_SUCCESS,
  LOAD_CARD,
  LOAD_CARD_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  card: null,
});

const cardDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARD:
      return state.set('loading', true).set('card', null).set('error', false);
    case LOAD_CARD_SUCCESS:
      return state.set('card', action.card).set('loading', false);
    case LOAD_CARD_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
};

export default cardDetailReducer;
