import {
  LOAD_CARDS,
  LOAD_CARDS_SUCCESS,
  LOAD_CARDS_ERROR,
  NEXT_PAGE,
  RESET_PAGE,
} from './constants';

export const loadCards = () => ({
  type: LOAD_CARDS
});

export const cardsLoaded = cards => ({
  type: LOAD_CARDS_SUCCESS,
  cards
});

export const cardsLoadingError = error => ({
  type: LOAD_CARDS_ERROR,
  error
});

export const nextPage = () => ({
  type: NEXT_PAGE
});

export const resetPage = () => ({
  type: RESET_PAGE
});
