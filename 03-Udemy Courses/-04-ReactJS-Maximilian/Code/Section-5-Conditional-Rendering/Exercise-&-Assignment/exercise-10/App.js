import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
  const [deleting, setDeleteingState] = React.useState(false);
  const onDeleteHandler = () => {
    setDeleteingState(true);
  };
  const proceedHandler = () => {
    setDeleteingState(false);
  };

  return (
    <div>
      {deleting ? (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
      ) : (
        ''
      )}
      <button onClick={onDeleteHandler}>Delete</button>
    </div>
  );
}
