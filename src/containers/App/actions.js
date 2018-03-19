import {
  LOAD_CARDS,
  LOAD_CARDS_SUCCESS,
  LOAD_CARDS_ERROR,
  NEXT_PAGE
} from './constants';

/**
 * Load the cards, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CARDS
 */
export const loadCards = () => ({
  type: LOAD_CARDS
});

/**
 * Dispatched when the cards are loaded by the request saga
 *
 * @param  {array} cards The repository data
 *
 * @return {object}      An action object with a type of LOAD_CARDS_SUCCESS passing the repos
 */
export const cardsLoaded = cards => ({
  type: LOAD_CARDS_SUCCESS,
  cards
});

/**
 * Dispatched when loading the cards fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CARDS_ERROR passing the error
 */
export const cardsLoadingError = error => ({
  type: LOAD_CARDS_ERROR,
  error
});

export const nextPage = () => ({
  type: NEXT_PAGE
});
