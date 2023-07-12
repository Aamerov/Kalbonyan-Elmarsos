import React from 'react';

import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = ['Learn React', 'Practice React', 'Profit!'];

// don't change the Component name "App"
export default function App(props) {
  return (
    <ul>
      {DUMMY_TODOS.map((item) => (
        <Todo text={item} />
      ))}
    </ul>
  );
}
