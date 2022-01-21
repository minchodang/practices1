import React from 'react';
import styled from 'styled-components';
import LikeButton from '../../pages/List/likeButton';

function Win({ src, content, like }) {
  return (
    <Figure>
      <ImgContainer>
        <Wins src={src} alt="test" />
        <StoreButton>저장</StoreButton>
      </ImgContainer>
      <h3>{content}</h3>
      <LikeButton like={like} />
    </Figure>
  );
}

const Figure = styled.div`
  display: inline-block;
  margin: 0;
  margin-bottom: 15px;
`;

const Wins = styled.img`
  position: relative;
  width: 100%;
  border: 1px solid none;
  border-radius: 15px;
  z-index: 8000;
  &:hover {
    transition: transform 1s;
    filter: brightness(40%);
    cursor: zoom-in;
    z-index: 1999;
  }
`;

const ImgContainer = styled.div`
  position: relative;
`;
const StoreButton = styled.button`
  float: right;
  position: absolute;
  top: 5%;
  right: 7%;
  border-radius: 20px;
  background-color: rgb(0 217 255);
  color: white;
  border: none;
  width: 70px;
  height: 35px;
  font-size: 12px;
  cursor: pointer;
  z-index: 2000;
  &:hover {
    z-index: 9999;
  }
  /* ${Wins}: hover & {
    transition: transform 1s;
    filter: brightness(40%);
    cursor: zoom-in;
    z-index: 1999;
  } */
`;

export default Win;
