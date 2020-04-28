import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export default function Drum({ handleDrumClick }) {
  return (
    <DrumPlayer>
      <Row>
        <button type='button' onClick={handleDrumClick} value='q'>
          Q
        </button>
        <button type='button' onClick={handleDrumClick} value='w'>
          W
        </button>
        <button type='button' onClick={handleDrumClick} value='e'>
          E
        </button>
      </Row>
      <Row>
        <button type='button' onClick={handleDrumClick} value='a'>
          A
        </button>
        <button type='button' onClick={handleDrumClick} value='s'>
          S
        </button>
        <button type='button' onClick={handleDrumClick} value='d'>
          D
        </button>
      </Row>
      <Row>
        <button type='button' onClick={handleDrumClick} value='z'>
          Z
        </button>
        <button type='button' onClick={handleDrumClick} value='x'>
          X
        </button>
        <button type='button' onClick={handleDrumClick} value='c'>
          C
        </button>
      </Row>
    </DrumPlayer>
  );
}

Drum.propTypes = {
  handleDrumClick: PropTypes.func.isRequired,
};

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
    cursor: pointer;
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
    transition: all 0.3s ease-in-out;

    :focus {
      outline: 2px solid #fc5185;
    }

    :hover {
      transform: scale(1.1);
    }
    :active {
      color: #ffffff;
      background: #fc5185;
    }
  }
`;
