import React from 'react';
import styled from '@emotion/styled';
import Drum from './Drum';
import Options from './Options';

export default function Player() {
  return (
    <Wrapper>
      <Drum />
      <Options />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background: #f5f5f5;
  padding: 1rem;
  flex-basis: 100%;
  max-width: 950px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem;
`;
