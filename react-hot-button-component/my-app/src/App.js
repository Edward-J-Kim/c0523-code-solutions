import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button color="first" text="Hot Button" />
        </div>
      </header>
    </div>
  );
}

export default App;
