import React from 'react';
import styled from '@emotion/styled';
import { FiDelete } from 'react-icons/fi';
import { blue, white, pink } from './colors';

export default function Keys() {
  return (
    <Calculator>
      <Row className="display">
        <p>This is the result</p>
      </Row>
      <Row>
        <button type="button" value="w">
          CE
        </button>
        <button type="button" value="e">
          C
        </button>
        <button type="button" value="e">
          %
        </button>
        <button type="button" value="q">
          <FiDelete />
        </button>
      </Row>
      <Row>
        <button type="button" value="q">
          <sup>1</sup>&frasl;<sub>x</sub>
        </button>
        <button type="button" value="w">
          <p>
            <sub>X</sub>2
          </p>
        </button>
        <button type="button" value="e">
          &radic;<sup className="square">x</sup>
        </button>
        <button type="button" value="e">
          /
        </button>
      </Row>
      <Row>
        <button type="button" value="q">
          7
        </button>
        <button type="button" value="w">
          8
        </button>
        <button type="button" value="e">
          9
        </button>
        <button type="button" value="e">
          &times;
        </button>
      </Row>
      <Row>
        <button type="button" value="a">
          4
        </button>
        <button type="button" value="s">
          5
        </button>
        <button type="button" value="d">
          6
        </button>
        <button type="button" value="d">
          -
        </button>
      </Row>
      <Row>
        <button type="button" value="z">
          1
        </button>
        <button type="button" value="x">
          2
        </button>
        <button type="button" value="c">
          3
        </button>
        <button type="button" value="c">
          +
        </button>
      </Row>
      <Row>
        <button type="button" value="c">
          +/-
        </button>
        <button type="button" value="z">
          0
        </button>
        <button type="button" value="x">
          &middot;
        </button>
        <button type="button" value="c">
          =
        </button>
      </Row>
    </Calculator>
  );
}

const Calculator = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;

  & .display {
    justify-content: flex-end;
    padding: 0px 1rem;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 2rem 1.5rem;
    cursor: default;
    font-family: inherit;

    p {
      justify-content: flex-end;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 0 1rem;

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
    transition: all 0.3s ease-in-out;
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
    }
  }
`;
