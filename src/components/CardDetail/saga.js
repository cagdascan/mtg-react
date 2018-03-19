import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_CARD } from './constants';
import { BASE_URL } from '../../containers/App/constants';
import { cardLoaded, cardLoadingError } from './actions';

import request from '../../utils/request';

export function* getCard(action) {
  const requestURL = `${BASE_URL}/cards/${action.id}`;

  try {
    const { card } = yield call(request, requestURL);
    yield put(cardLoaded(card));
  } catch (err) {
    yield put(cardLoadingError(err));
  }
}

export default function* cardData() {
  yield takeLatest(LOAD_CARD, getCard);
}