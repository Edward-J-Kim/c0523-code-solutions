import { useState } from 'react';
import './App.css';

function App() {
  const [count, getCount] = useState(0);
  function handleDownClick() {
    getCount(count - 1);
  }
  function handleUpClick() {
    getCount(count + 1);
  }
  return (
    <div class="button">
      <button onClick={handleDownClick}>Down</button>
      <p class="click-count">{count}</p>
      <button onClick={handleUpClick}>Up</button>
    </div>
  );
}

export default App;
