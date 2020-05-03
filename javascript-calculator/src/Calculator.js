import React from 'react';
import styled from '@emotion/styled';
import { FiDelete } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { blue, white, pink } from './colors';

export default function Calculator({
  upperDisplay,
  lowerDisplay,
  handleButtonPressClick,
}) {
  return (
    <Wrapper>
      <Row className='display'>
        <div>
          <p>{upperDisplay}</p>
        </div>
        <div id='display'>
          <h1>{lowerDisplay === '' ? 0 : lowerDisplay}</h1>
        </div>
      </Row>
      <Row>
        <button
          type='button'
          id='clearState'
          value='CE'
          onClick={handleButtonPressClick}
        >
          CE
        </button>
        <button
          type='button'
          id='clear'
          value='Escape'
          onClick={handleButtonPressClick}
        >
          C
        </button>
        <button type='button' value='%' onClick={handleButtonPressClick}>
          %
        </button>
        <button type='button' value='Delete' onClick={handleButtonPressClick}>
          <FiDelete />
        </button>
      </Row>
      <Row>
        <button
          type='button'
          value='fraction'
          style={{ letterSpacing: '5px' }}
          onClick={handleButtonPressClick}
        >
          <sup>1</sup>&frasl;<sub>x</sub>
        </button>
        <button
          type='button'
          value='square'
          className='square'
          onClick={handleButtonPressClick}
        >
          x^2
        </button>
        <button type='button' value='root' onClick={handleButtonPressClick}>
          &radic;x
        </button>
        <button
          type='button'
          id='divide'
          value='/'
          onClick={handleButtonPressClick}
        >
          /
        </button>
      </Row>
      <Row>
        <button
          type='button'
          id='seven'
          value='7'
          onClick={handleButtonPressClick}
        >
          7
        </button>
        <button
          type='button'
          id='eight'
          value='8'
          onClick={handleButtonPressClick}
        >
          8
        </button>
        <button
          type='button'
          id='nine'
          value='9'
          onClick={handleButtonPressClick}
        >
          9
        </button>
        <button
          type='button'
          id='multiply'
          value='*'
          onClick={handleButtonPressClick}
        >
          &times;
        </button>
      </Row>
      <Row>
        <button
          type='button'
          id='four'
          value='4'
          onClick={handleButtonPressClick}
        >
          4
        </button>
        <button
          type='button'
          id='five'
          value='5'
          onClick={handleButtonPressClick}
        >
          5
        </button>
        <button
          type='button'
          id='six'
          value='6'
          onClick={handleButtonPressClick}
        >
          6
        </button>
        <button
          type='button'
          id='subtract'
          value='-'
          onClick={handleButtonPressClick}
        >
          -
        </button>
      </Row>
      <Row>
        <button
          type='button'
          id='one'
          value='1'
          onClick={handleButtonPressClick}
        >
          1
        </button>
        <button
          type='button'
          id='two'
          value='2'
          onClick={handleButtonPressClick}
        >
          2
        </button>
        <button
          type='button'
          id='three'
          value='3'
          onClick={handleButtonPressClick}
        >
          3
        </button>
        <button
          type='button'
          id='add'
          value='+'
          onClick={handleButtonPressClick}
        >
          +
        </button>
      </Row>
      <Row>
        <button type='button' value='Negate' onClick={handleButtonPressClick}>
          +/-
        </button>
        <button
          type='button'
          id='zero'
          value='0'
          onClick={handleButtonPressClick}
        >
          0
        </button>
        <button
          type='button'
          id='decimal'
          value='.'
          onClick={handleButtonPressClick}
        >
          &middot;
        </button>
        <button
          type='button'
          id='equals'
          value='Enter'
          onClick={handleButtonPressClick}
        >
          =
        </button>
      </Row>
    </Wrapper>
  );
}

// Calculator.defaultProps = {
//   upperDisplay: '',
//   lowerDisplay: '0',
// };

Calculator.propTypes = {
  upperDisplay: PropTypes.string,
  lowerDisplay: PropTypes.string,
  handleButtonPressClick: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;

  & .display {
    justify-content: flex-end;
    padding: 1rem;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 2rem 1.5rem;
    cursor: default;
    font-family: inherit;
    display: flex;
    flex-wrap: wrap;

    & div {
      flex-basis: 100%;
      text-align: end;
    }

    p {
      justify-content: flex-end;
      font-size: calc(16px + 0.5vw);
      word-break: break-all;
      margin-top: 0.5rem;
      margin-bottom: 0;
    }

    h1 {
      margin: 0;
      word-break: break-all;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 0 1rem;

  & .square {
    font-size: calc(16px + 1vw);
  }
  & button {
    cursor: pointer;
    width: 20%;
    background: ${blue};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0.5rem;
    font-family: inherit;
    font-weight: 800;
    color: ${pink};
    text-align: center;
    font-size: calc(16px + 2vw);
    border: 0px;
    transition: all 0.15s ease-in;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
    }

    :focus {
      outline: 2px solid ${pink};
    }

    :hover {
      transform: scale(1.1);
    }
    :active {
      color: ${white};
      background: ${pink};
      transform: translateY(4px);
    }
  }
`;
