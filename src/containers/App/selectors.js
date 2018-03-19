import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectCards = () =>
  createSelector(
    selectGlobal,
    globalState =>
      Array.isArray(globalState.get('cards'))
        ? globalState.get('cards')
        : globalState.get('cards').toJS()
  );

const makeSelectPage = () =>
  createSelector(selectGlobal, globalState => globalState.get('page'));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectCards,
  makeSelectPage,
  makeSelectLocation,
};
