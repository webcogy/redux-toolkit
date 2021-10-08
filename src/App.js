import logo from './logo.svg';
import './App.css';
import { configureStore, createAction } from '@reduxjs/toolkit';
import { useEffect } from 'react';

function App() {

  const increment = createAction("counter/INCREMENT");
  const decrement = createAction("counter/DECREMENT");
  
  function counter(state = 0, action) {
    switch (action.type) {
      case increment.type:
        return state + 1;
      case decrement.type:
        return state - 1;
      default:
        return state;
    }
  }
  
  const store = configureStore({
    reducer: counter
  });
  
  useEffect(() => {
    store.dispatch(increment());
    /* console.log(store.getState()) */
  }, []);

  
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
  );
}

export default App;
