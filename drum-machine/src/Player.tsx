import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import styled from '@emotion/styled';
import Drum from './Drum';
import Options from './Options';
import { bankOne, bankTwo } from './audioSources';

export default function Player() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [message, setMessage] = useState('Rocking Out');

  const handlePower = (): void => {
    setPower(!power);
  };
  const handleBank = (): void => {
    if (bank) {
      setMessage('Smooth Piano Kit');
      setBank(!bank);
    } else {
      setMessage('Heater Kit ');
      setBank(!bank);
    }
  };

  const handleVolume = (event: ChangeEvent<HTMLInputElement>): void => {
    setVolume(Number(event.target.value) / 100);
  };

  function playAudio(key: string) {
    let audio;

    if (bank) {
      audio = bankOne[key].url;
      if (bankOne[key].message !== message) setMessage(bankOne[key].message);
    } else {
      audio = bankTwo[key].url;
      if (bankTwo[key].message !== message) setMessage(bankOne[key].message);
    }

    const audioRef = new Audio(audio);

    async function play(): Promise<void> {
      audioRef.volume = volume;
      try {
        await audioRef.play();
      } catch (error) {
        console.error(error);
      }
    }

    play();
  }

  const handleDrumKeyPress = (event: KeyboardEvent): void => {
    if (!power) return;

    const key = event?.key?.toUpperCase();
    playAudio(key);
  };

  const handleDrumClick = (event: MouseEvent<HTMLElement>): void => {
    if (!power) return;

    const key = event?.currentTarget?.dataset.value?.toUpperCase();
    if (key !== undefined) {
      playAudio(key);
    }
  };

  useEffect(function listenForKeyPress() {
    document.addEventListener('keypress', handleDrumKeyPress);

    return function removeListenForKeyPress() {
      document.removeEventListener('keypress', handleDrumKeyPress);
    };
  });

  return (
    <Wrapper>
      <Drum handleDrumClick={handleDrumClick} />
      <Options
        message={message}
        power={power}
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
