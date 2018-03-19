import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './index';
import { LOAD_CARDS, LOAD_CARDS_SUCCESS, LOAD_CARDS_ERROR, NEXT_PAGE, RESET_PAGE } from './constants';
import { loadCards, cardsLoaded, cardsLoadingError, nextPage, resetPage } from './actions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('app actions', () => {
  it('should create an action to load cards', () => {
    const expectedAction = {
      type: LOAD_CARDS
    };

    expect(loadCards()).toEqual(expectedAction);
  });

  it('should create a card load success action ', () => {
    const cards = [];
    const expectedAction = {
      type: LOAD_CARDS_SUCCESS,
      cards
    };

    expect(cardsLoaded(cards)).toEqual(expectedAction);
  });

  it('should create a cards loading error action', () => {
    const error = new Error('err');
    const expectedAction = {
      type: LOAD_CARDS_ERROR,
      error
    };

    expect(cardsLoadingError(error)).toEqual(expectedAction);
  });

  it('should create a next page action', () => {
    const expectedAction = {
      type: NEXT_PAGE
    };

    expect(nextPage()).toEqual(expectedAction);
  });

  it('should create a reset page action', () => {
    const expectedAction = {
      type: RESET_PAGE
    };

    expect(resetPage()).toEqual(expectedAction);
  });
});
