/* eslint-disable react/prop-types */
import React from 'react';
import NumberButton from './NumberButton';
import ClickButton from './ClickButton';

const Counter = ({ count, clickHandler }) => (
  <>
    <h1>Counter</h1>
    <ClickButton count={count} clickHandler={() => clickHandler(1)} />
    <div>
      {[1, 2, 3, 4, 5].map((number) => (
        <NumberButton
          key={number}
          number={number}
          clickHandler={() => clickHandler(number)}
        />
      ))}
    </div>
  </>
);

export default Counter;
