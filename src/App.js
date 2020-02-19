import React from 'react';
import Game3x3 from './games/3x3'
import Game4x4 from './games/4x4'
import './index.css';

function App() {
  return (
    <div className="App">
      <Game3x3></Game3x3>
      <Game4x4></Game4x4>
    </div>
  );
}

export default App;
