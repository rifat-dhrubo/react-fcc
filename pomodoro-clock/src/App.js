import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi';
import { black, white, darkPink, grey } from './colors';

function App() {
  return (
    <Wrapper>
      <Clock>
        <Info>
          <div className="break">
            <p>Break Length</p>

            <div className="info-control">
              <button type="button">
                <i>
                  <AiOutlineArrowUp />
                </i>
              </button>
              <p>5</p>
              <button type="button">
                <i>
                  <AiOutlineArrowDown />
                </i>
              </button>
            </div>
          </div>
          <div className="session">
            <p>Session Length</p>

            <div className="info-control">
              <button type="button">
                <i>
                  <AiOutlineArrowUp />
                </i>
              </button>
              <p>5</p>
              <button type="button">
                <i>
                  <AiOutlineArrowDown />
                </i>
              </button>
            </div>
          </div>
        </Info>
        <Session>
          <p>Session</p>
          <h2>25:00</h2>
        </Session>
        <Control>
          <button type="button">
            <i>
              <FaPlay />
            </i>
          </button>
          <button type="button">
            <i>
              <FaPause />
            </i>
          </button>
          <button type="button">
            <i>
              <FiRefreshCcw />
            </i>
          </button>
        </Control>
      </Clock>
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

const Clock = styled.div`
  background: ${grey};
  /* opacity: 0.15; */
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  max-width: 750px;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 1rem;
  text-align: center;
  margin: -1rem -0;
`;

const Info = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: space-between;
  margin: 1rem -0;
  p {
    font-size: calc(16px + 0.5vw);
    cursor: default;
  }

  & .info-control {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 1rem;
      cursor: default;
      margin-bottom: 1.7rem;
    }

    button {
      background: inherit;
      color: inherit;
      border: none;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      i {
        font-size: calc(16px + 0.5vw);
      }
      :focus {
        outline: 1px solid ${darkPink};
      }

      :hover {
        transform: scale(1.1);
      }
      :active {
        color: ${grey};
        background: ${darkPink};
        transform: translateY(4px);
      }
    }

    & .info-control__key {
      height: 4rem;
      width: 2rem;
    }
  }

  & .break {
    flex-basis: 30%;
    background: rgba(234, 234, 234, 0.01);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  & .session {
    flex-basis: 30%;
    background: rgba(234, 234, 234, 0.01);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
const Session = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 50%;
  justify-self: center;
  margin: 1rem auto;
  background: rgba(234, 234, 234, 0.01);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 6rem;
  flex-direction: column;
  p {
    font-size: calc(16px + 1.5vw);
    margin: 1rem 0;
    width: 100%;
    cursor: default;
  }

  h2 {
    font-size: calc(16px + 1.5vw);
    margin: 1rem;
    cursor: default;
  }
`;
const Control = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  margin: 1rem -1rem;

  button {
    background: inherit;
    color: inherit;
    padding: 1rem;
    margin: 0 1rem;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.15s ease-in;
    font-family: inherit;
    cursor: pointer;

    i {
      font-size: calc(16px + 0.5vw);
    }
    :focus {
      outline: 1px solid ${darkPink};
    }

    :hover {
      transform: scale(1.1);
    }
    :active {
      color: ${grey};
      background: ${darkPink};
      transform: translateY(4px);
    }
  }
`;
