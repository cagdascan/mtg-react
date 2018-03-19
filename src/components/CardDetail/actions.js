import {
  LOAD_CARD,
  LOAD_CARD_SUCCESS,
  LOAD_CARD_ERROR,
} from './constants';

export const loadCard = (id) => ({
  type: LOAD_CARD,
  id
});

export const cardLoaded = card => ({
  type: LOAD_CARD_SUCCESS,
  card
});

export const cardLoadingError = error => ({
  type: LOAD_CARD_ERROR,
  error
});