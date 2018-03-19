import React from 'react';
import PropTypes from 'prop-types';

const CardDetail = ({ match }) => <div>{match.params.id}</div>;

CardDetail.propTypes = {
  match: PropTypes.object
};

export default CardDetail;
