import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import {
  makeSelectCards,
  makeSelectLoading,
  makeSelectError
} from './selectors';
import { loadCards, nextPage } from './actions';
import reducer from './reducer';
import saga from './saga';

class App extends Component {
  componentDidMount() {
    this.props.loadCards();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !this.props.loading
    ) {
      this.props.nextPage();
      this.props.loadCards();
    }
  };

  render() {
    const { cards } = this.props;
    return (
      <ul>
        {cards.map((i, idx) => (
          <li key={idx}>
            <Link to={`/card/${i.number}`}>{i.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  cards: PropTypes.array,
  loadCards: PropTypes.func,
  nextPage: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  loadCards: () => {
    dispatch(loadCards());
  },
  nextPage: () => {
    dispatch(nextPage());
  }
});

const mapStateToProps = createStructuredSelector({
  cards: makeSelectCards(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(App);
