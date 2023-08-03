import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
  const [enteredText, setText] = React.useState('');
  const [validationMasage, checkValidation] = React.useState('Invalid message');

  const textChangeHandler = (event) => {
    setText(event.target.value);
    if (event.target.value.trim().length < 3) {
      // Todo: Update state to say "Invalid"
      checkValidation('Invalid message');
    } else {
      // Todo: Update state to say "Valid"
      checkValidation('Valid message');
    }
  };
  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={textChangeHandler} />
      <p>{validationMasage}</p>
    </form>
  );
}
