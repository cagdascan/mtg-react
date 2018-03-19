import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import {
  makeSelectCards,
  makeSelectLoading,
  makeSelectError
} from './selectors';
import { loadCards, nextPage, resetPage } from './actions';
import reducer from './reducer';
import saga from './saga';
import ListItem from '../../components/ListItem';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`;

const List = styled.ul`
  list-style: none;
  -webkit-padding-start: 0;
`;

const Header = styled.h1`
  font-size: 24px;
  color: #fff;
  margin: 40px 0;
  text-align: center;
`;

const Loader = styled.div`
  height: 100px;
  color: #fff;
  text-align: center;
  margin: 50px 0;
`;

export class App extends Component {
  static defaultProps = {
    cards: [],
    resetPage: () => { },
    loadCards: () => { }
  };

  componentDidMount() {
    this.props.resetPage();
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
    const { cards, loading } = this.props;

    return (
      <Wrapper>
        <Header>
          Magic the Gathering
        </Header>
        <List>
          {cards.map(item => <ListItem name={item.name} id={item.id} imageUrl={item.imageUrl} type={item.type} />)}
        </List>
        {loading && <Loader>loading...</Loader>}
      </Wrapper>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  cards: PropTypes.array.isRequired,
  loadCards: PropTypes.func,
  nextPage: PropTypes.func,
  resetPage: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  loadCards: () => {
    dispatch(loadCards());
  },
  nextPage: () => {
    dispatch(nextPage());
  },
  resetPage: () => {
    dispatch(resetPage());
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
