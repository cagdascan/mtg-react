import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectCard, makeSelectLoading } from './selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';
import styled from 'styled-components';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { loadCard } from './actions';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Container = styled.div`
  position: relative;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Header = styled.h1`
  color: #fff;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  float: left;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const Details = styled.table`
  height: 100%;
  width: 50%;
  float: left;
`;

const Body = styled.tbody`
  color: #fff;
  vertical-align: top;
`;

const Title = styled.td`
  padding: 10px;
`;

const Detail = styled.td`
  padding: 10px;
`;

const Row = styled.tr`
  margin-bottom: 4px;
`;

const Loader = styled.div`
  height: 100px;
  color: #fff;
  text-align: center;
  margin: 50px 0;
`;

const BackLink = styled(Link) `
  display: block;
  color: #fff;
  text-align: right;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export class CardDetail extends Component {
  static defaultProps = {
    match: {
      params: {
        id: null
      }
    },
    loadCard: () => { }
  };

  componentDidMount() {
    const cardId = this.props.match.params.id;
    this.props.loadCard(cardId);
  }

  render() {
    const { card, loading } = this.props;

    if (loading) {
      return (<Wrapper><Loader>loading...</Loader></Wrapper>);
    }

    if (!card) {
      return null;
    }
    const { name, manaCost, imageUrl, text, flavor } = card;

    return (
      <Wrapper>
        <Container>
          <Header>{name}</Header>
          <BackLink to="/">back</BackLink>
          <ImageContainer>
            <Image src={imageUrl}></Image>
          </ImageContainer>
          <Details>
            <Body>
              <Row><Title>Card Name:</Title><Detail>{name}</Detail></Row>
              <Row><Title>Mana Cost:</Title><Detail>{manaCost}</Detail></Row>
              <Row><Title>Text:</Title><Detail>{text}</Detail></Row>
              <Row><Title>Flavor Text:</Title><Detail>{flavor}</Detail></Row>
            </Body>
          </Details>
        </Container>
      </Wrapper>
    );
  }
}

CardDetail.propTypes = {
  match: PropTypes.object,
  loadCard: PropTypes.func,
  card: PropTypes.object,
  loading: PropTypes.bool
};

export const mapDispatchToProps = dispatch => ({
  loadCard: (id) => {
    dispatch(loadCard(id));
  }
});

const mapStateToProps = createStructuredSelector({
  card: makeSelectCard(),
  loading: makeSelectLoading(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'card', reducer });
const withSaga = injectSaga({ key: 'card', saga });

export default compose(withReducer, withSaga, withConnect)(CardDetail);
