import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.li`
  height: 120px;
  border: 1px solid #000;
  border-radius: 4px;
  margin-bottom: 4px;
  padding: 10px 15px;
  background: #383838;
  :nth-child(2n) {
    background: #666;
  }
`;

const StyledLink = styled(Link) `
  color: #000;
  text-decoration: none;
  display: block;
  height: 100%;
  line-height: 100%;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 30%;
  float: left;
`;

const Details = styled.div`
  width: 70%;
  float: left;
  color: #fff;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const Name = styled.div`
  font-size: 18px;
  color: #c6c6c6;
  margin-top: 4px;
  margin-bottom: 20px;
`;

const Type = styled.div`
  font-size: 16px;
`;

const ListItem = ({ type, name, id, imageUrl }) => (
  <Wrapper key={id}>
    <StyledLink to={`/card/${id}`}>
      <ImageContainer>
        <Image src={imageUrl} />
      </ImageContainer>
      <Details>
        <Name>{name}</Name>
        <Type>{type}</Type>
      </Details>
    </StyledLink>
  </Wrapper>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default ListItem;