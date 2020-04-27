import React from 'react';
import styled from '@emotion/styled';

export default function Drum() {
  return (
    <DrumPlayer>
      <Row>
        <button type='button'>Q</button>
        <button type='button'>W</button>
        <button type='button'>E</button>
      </Row>
      <Row>
        <button type='button'>A</button>
        <button type='button'>S</button>
        <button type='button'>D</button>
      </Row>
      <Row>
        <button type='button'>Z</button>
        <button type='button'>X</button>
        <button type='button'>C</button>
      </Row>
    </DrumPlayer>
  );
}

const DrumPlayer = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
`;

const Row = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 0 1rem;

  & button {
    width: 33.33%;
    background: #364f6b;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0.5rem;
    font-family: inherit;
    font-weight: 800;
    color: #fc5185;
    text-align: center;
    font-size: calc(16px + 4vw);
    border: 0px;

    :focus {
      outline: 2px solid #fc5185;
    }
  }
`;
