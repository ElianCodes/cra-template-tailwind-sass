import React from 'react';
import logo from './logo.svg';
import './assets/scss/tailwind.scss';

function App() {
  return (
    <div className="bg-gray-800 w-screen h-screen flex justify-center items-center">
      <header className="text-white font-medium">
        <img src={logo} className="w-64 h-auto app-spinner" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
