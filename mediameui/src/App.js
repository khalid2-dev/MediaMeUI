import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
      axios.get('http://localhost:8080/welcome')
          .then(response => {
              setMessage(response.data);
          })
          .catch(error => {
              console.error('There was an error fetching the data!', error);
          });
  }, []);

  return (
      <div className="App">
          <header className="App-header">
              <p>{message}</p>
          </header>
      </div>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );*/
}

export default App;
