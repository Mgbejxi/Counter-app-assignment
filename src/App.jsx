import { useState } from 'react';
import * as Icon from "react-feather";
import './App.css';

function App() {
  const [count, setCount] = useState(0);


   // increase by 1
   const increaseByOne = (e) => {
    e.preventDefault();
    setCount((count) => count + 1);
  };

  // increase by 10
  const increaseByTen = (e) => {
    e.preventDefault();
    setCount((count) => count + 10);
  };

  // reset to zero(0)
  const reset = (e) => {
    e.preventDefault();
    setCount(0);
  };

  // generate random number between 1 and 100
  const randomNumber = (e) => {
    e.preventDefault();
    setCount(Math.floor(Math.random() * 100));
  };

  //decrease by 10
  const decreaseByTen = (e) => {
    e.preventDefault();
    setCount((count) => count - 10);
  };

  // decrease by 1
  const decreaseByOne = (e) => {
    e.preventDefault();
    setCount((count) => count - 1);
  };


  return (
    <>
      <section className="body-section">
      <section className="count-section">
        <h4>Current Value:</h4>

        <h1 className="count-num">{count}</h1>

        <div className="count-buttons">
          <button onClick={increaseByOne}>
            <Icon.ChevronUp />
          </button>
          <button onClick={increaseByTen}>
            <Icon.ChevronsUp />
          </button>
          <button onClick={reset}>
            <Icon.RotateCcw />
          </button>
          <button onClick={randomNumber}>
            <Icon.Hash />
          </button>
          <button onClick={decreaseByTen}>
            <Icon.ChevronsDown />
          </button>
          <button onClick={decreaseByOne}>
            <Icon.ChevronDown />
          </button>
        </div>
      </section>
    </section>
      
    </>
  );
}


export default App
