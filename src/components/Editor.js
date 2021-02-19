import React from 'react';
import Menu from './Menu';
import getProps from './functions/getProps'

function App() {
  getProps()
  return (
    <>
      <h2>Photo Editor</h2>
      <Menu styles={getProps()}/>
    </>
  );
}

export default App;
