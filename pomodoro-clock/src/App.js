import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { black, white, darkPink } from './colors';
import Clock from './Clock';
import { useInterval } from './utils/customHooks';

function App() {
  // in minutes
  const [sessionLength, setSessionLength] = useState(25);
  // in minutes
  const [breakLength, setBreakLength] = useState(5);
  // countdown time in seconds
  const [time, setTime] = useState(1500);
  const [display, setDisplay] = useState('25:00');
  /* default value 0 don't trigger the useInterval so count down does not begin */
  const [isPlaying, setIsPlaying] = useState(0);
  const [timerName, setTimerName] = useState('Session');
  const audioRef = useRef('');

  const handlePlayPause = () => {
    console.log(`ran`);
    if (isPlaying === 0) {
      setIsPlaying(1000);
    } else {
      setIsPlaying(0);
    }
  };

  const handleBreakLength = (event) => {
    const type = event.target.value;
    if (type === '+' && breakLength !== 60) setBreakLength(breakLength + 1);
    if (type === '-' && breakLength !== 1) setBreakLength(breakLength - 1);
  };
  const handleSessionLength = (event) => {
    const type = event.target.value;
    if (type === '+' && sessionLength !== 60)
      setSessionLength(sessionLength + 1);
    if (type === '-' && sessionLength !== 1)
      setSessionLength(sessionLength - 1);
  };

  // resetting to default
  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setTime(1500);
    setDisplay('25:00');
    setIsPlaying(0);
    setTimerName('Session');

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  useEffect(
    function setSessionTime() {
      if (timerName === 'Session') setTime(sessionLength * 60);
    },
    [sessionLength, timerName]
  );
  useEffect(
    function setBreakTime() {
      if (timerName === 'Break') setTime(breakLength * 60);
    },
    [breakLength, timerName]
  );

  useEffect(
    function displayTime() {
      if (time === 0) {
        setDisplay(`00:00`);
      }
      let minutes = Math.floor(time / 60);
      let seconds = time - minutes * 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      setDisplay(`${minutes}:${seconds}`);
    },
    [time]
  );

  useInterval(function setTimer() {
    if (timerName === 'Session') {
      if (time === 1) {
        setDisplay(`00:00`);
        setTimerName('Break');
        audioRef.current.currentTime = 0;
        audioRef.current.play();

        setTimeout(() => {
          setTime(breakLength * 60);
        }, 0);

        return;
      }
      setTime(time - 1);
    } else {
      if (time === 1) {
        setDisplay(`00:00`);
        setTimerName('Session');
        audioRef.current.currentTime = 0;
        audioRef.current.play();

        setTimeout(() => {
          setTime(sessionLength * 60);
        });
        return;
      }
      setTime(time - 1);
    }
  }, isPlaying);

  return (
    <Wrapper>
      <Clock
        breakLength={breakLength}
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        handleBreakLength={handleBreakLength}
        handleSessionLength={handleSessionLength}
        sessionLength={sessionLength}
        handleReset={handleReset}
        display={display}
        timerName={timerName}
        audioRef={audioRef}
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${black};
  height: 100vh;
  color: ${darkPink};

  & ::selection {
    background: ${white};
    color: ${white};
  }
`;
