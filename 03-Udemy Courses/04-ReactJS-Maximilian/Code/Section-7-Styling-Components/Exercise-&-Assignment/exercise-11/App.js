import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
  const [defaultColor, setColor] = React.useState('white');

  const colorChanger = () => {
    setColor((prevColor) => {
      if (prevColor === 'white') {
        return 'red';
      }
      return 'white';
    });
  };
  return (
    <div>
      <p style={{ color: defaultColor }}>Style me!</p>
      <button onClick={colorChanger}>Toggle style</button>
    </div>
  );
}
