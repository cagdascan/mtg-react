import { createSelector } from 'reselect';

const selectCardDetail = state => state.get('cardDetail');

const makeSelectLoading = () =>
  createSelector(selectCardDetail, state => state.get('loading'));

const makeSelectError = () =>
  createSelector(selectCardDetail, state => state.get('error'));

const makeSelectCard = () =>
  createSelector(
    selectCardDetail,
    state => state.get('card')
  );

export {
  selectCardDetail,
  makeSelectLoading,
  makeSelectError,
  makeSelectCard,
};