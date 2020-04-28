import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Drum from './Drum';
import Options from './Options';

export default function Player() {
  const [power, setPower] = useState(false);
  const [bank, setBank] = useState(false);
  const [volume, setVolume] = useState(50);

  const handlePower = () => {
    setPower(!power);
  };
  const handleBank = () => {
    setBank(!bank);
  };

  const handleVolume = (event) => {
    setVolume(Number(event.target.value));
  };

  const handleDrumKeyPress = (event) => {
    console.log(event.key);
  };

  const handleDrumClick = (event) => {
    console.log(event.target.value);
  };

  useEffect(() => {
    document.addEventListener('keypress', handleDrumKeyPress);

    return () => {
      document.removeEventListener('keypress', handleDrumKeyPress);
    };
  });

  return (
    <Wrapper>
      <Drum handleDrumClick={handleDrumClick} />
      <Options
        handlePower={handlePower}
        handleBank={handleBank}
        handleVolume={handleVolume}
      />
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
  justify-content: center;
  margin: 1rem;
`;
