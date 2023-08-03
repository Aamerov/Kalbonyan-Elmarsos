import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
  const [counter, nextValue] = React.useState(0);
  const clickHandler = () => {
    nextValue((prevState) => prevState + 1);
  };
  return (
    <div>
      <p id="counter">{counter}</p>
      <button onClick={clickHandler}>Increment</button>
    </div>
  );
}
