/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from '@emotion/styled';

export default function Options() {
  return (
    <Option>
      <div className='group'>
        <input className='box' type='checkbox' id='power' />
        <label htmlFor='power' className='label' />
      </div>
      <div className='text'>
        <p>Rocking Out</p>
      </div>
      <div className='volume'>
        <input type='range' />
      </div>
      <div className='group'>
        <input className='box' type='checkbox' id='bank' />
        <label htmlFor='bank' className='label' />
      </div>
    </Option>
  );
}

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

  .group {
    position: relative;
    width: 50px;
    height: 50px;

    .label {
      position: absolute;
      top: 0;
      left: 0;
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
    .box {
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
