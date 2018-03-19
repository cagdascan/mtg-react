import { call, put, takeLatest, select } from 'redux-saga/effects';
import { LOAD_CARDS, BASE_URL, PAGE_SIZE } from './constants';
import { cardsLoaded, cardsLoadingError } from './actions';
import { makeSelectPage } from './selectors';

import request from '../../utils/request';

export function* getCards() {
  const page = yield select(makeSelectPage());
  const requestURL = `${BASE_URL}/cards?pageSize=${PAGE_SIZE}&page=${page}`;

  try {
    const { cards } = yield call(request, requestURL);
    yield put(cardsLoaded(cards));
  } catch (err) {
    yield put(cardsLoadingError(err));
  }
}

export default function* cardsData() {
  yield takeLatest(LOAD_CARDS, getCards);
}
