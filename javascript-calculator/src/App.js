import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Calculator from './Calculator';
import { blue, white } from './colors';
import {
  numberCheck,
  operatorCheck,
  decimalCheck,
  deleteCheck,
  enterCheck,
} from './utils/math';

function App() {
  const [history, setHistory] = useState('');
  const [display, setDisplay] = useState('');
  const [firstInput, setFirstInput] = useState('0');
  const [secondInput, setSecondInput] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumber = (key) => {
    if (operator === '') {
      // if the first input is number get rid of initial value
      if (firstInput === '0') {
        setDisplay(key);
        setFirstInput(key);
        setHistory(key);
      } else {
        setFirstInput(firstInput.concat(key));
        setDisplay(firstInput.concat(key));
        setHistory(history.concat(key));
      }
    } // first input was operator so use second input
    else {
      setSecondInput(secondInput.concat(key));
      setDisplay(secondInput.concat(key));
      setHistory(history.concat(key));
    }
  };

  const handleDecimal = (key) => {
    if (firstInput.slice(-1) === '.' || secondInput.slice(-1) === '.') {
      return;
    }
    if (operator === '') {
      setFirstInput(firstInput.concat(key));
      setDisplay(firstInput.concat(key));
      setHistory(history.concat(key));
    } else {
      setSecondInput(secondInput.concat(key));
      setDisplay(secondInput.concat(key));
      setHistory(history.concat(key));
    }
  };
  const handleOperator = (key) => {
    // when we have both first and second input calculate
    if (secondInput !== '') {
      const result = eval(`${firstInput}${operator}${secondInput}`);
      setHistory(
        history.concat(`${firstInput}${operator}${secondInput}${key}`)
      );
      setOperator(key);
      setFirstInput(String(result));
      setDisplay(String(result));
      setSecondInput('');
    }
    setOperator(key);
    // check if the last input was operator set history as that
    if (operatorCheck.test(history.slice(-1))) {
      setHistory(history.slice(0, -1).concat(key));
      return;
    }
    setHistory(history.concat(key));
  };

  // ! not registering first input
  const handleDelete = () => {
    console.log('delete');
    if (operator === '') {
      setFirstInput(firstInput.slice(0, -1));
      setDisplay(firstInput.slice(0, -1));
      setHistory(history.slice(0, -1));
    } else {
      setSecondInput(secondInput.slice(0, -1));
      setDisplay(secondInput.slice(0, -1));
      setHistory(history.slice(0, -1));
    }
  };
  // TODO handle Enter Logic
  const handleEnter = () => {
    //
  };

  const handleKey = (event) => {
    const key = event?.target?.value ?? event?.key;

    if (numberCheck.test(key)) {
      handleNumber(key);
      return;
    }

    if (operatorCheck.test(key)) {
      handleOperator(key);
      return;
    }

    if (decimalCheck.test(key)) {
      handleDecimal(key);
      return;
    }

    if (deleteCheck.test(key)) {
      handleDelete();
      return;
    }
    if (enterCheck.test(key)) {
      handleEnter();
    }
  };

  useEffect(function buttonPressOrClick() {
    document.addEventListener('keydown', handleKey);

    console.log(`I ran`);

    return () => document.removeEventListener('keydown', handleKey);
  });

  return (
    <Page>
      <Wrapper>
        <Calculator
          handleButtonPressClick={handleKey}
          upperDisplay={history}
          lowerDisplay={display}
        />
      </Wrapper>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${blue};
`;

const Wrapper = styled.div`
  display: flex;
  background: ${white};
  padding: 1rem;
  flex-basis: 100%;
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
`;

export default App;
