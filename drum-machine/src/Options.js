/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export default function Options({ handlePower, handleBank, handleVolume }) {
  return (
    <Option>
      <div className='toggle'>
        <h4>Power</h4>
        <input
          className='toggle__input'
          type='checkbox'
          id='power'
          onClick={handlePower}
        />
        <label htmlFor='power' className='label' />
      </div>
      <div className='text'>
        <p>Rocking Out</p>
      </div>
      <div className='volume'>
        <input
          type='range'
          min='1'
          max='100'
          step='1'
          onChange={handleVolume}
        />
      </div>
      <div className='toggle'>
        <h4>Bank</h4>
        <input
          className='toggle__input'
          type='checkbox'
          id='bank'
          onClick={handleBank}
        />
        <label htmlFor='bank' className='label' />
      </div>
    </Option>
  );
}

Options.propTypes = {
  handlePower: PropTypes.func.isRequired,
  handleBank: PropTypes.func.isRequired,
  handleVolume: PropTypes.func.isRequired,
};

const Option = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  color: #fc5185;
  font-weight: 800;
  font-size: calc(16px + 0.1vw);
  align-items: center;
  padding: 1rem 0;

  .toggle {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;

    h4 {
      cursor: default;
    }

    .label {
      width: 62px;
      height: 26px;
      box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
      background: #ffffff;
      cursor: pointer;

      &::after {
        content: '';
        display: block;
        width: 30%;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.3s ease-in-out;
      }
    }
    .toggle__input {
      display: none;

      &:checked + .label {
        background: #fc5185;

        &::after {
          content: '';
          display: block;
          width: 30%;
          height: 18px;
          margin-left: 40px;
          transition: 0.3s ease-in-out;
        }
      }
    }
  }

  & .text {
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    width: 50%;
    align-self: center;
    font-size: calc(16px + 0.5vw);
    padding: 0 0.3rem;
    line-height: 1.2;
    margin: 1rem;
    cursor: default;

    p {
      &::selection {
        background: yellow;
      }
    }
  }

  & #power {
  }
  & .volume {
  }
  & #bank {
  }
`;
