import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [storeData, setStoreData] = useState("");

  function DataShow(e) {
    const data = e.target.value;
    setInputText(data);
    setStoreData(data.split('').reverse().join(''));
  }

  return (
    <>
      <input type="text" id='inputBox' value={inputText}onChange={DataShow}placeholder="Enter your Text"/>
      <h2>{storeData}</h2>
    </>
  );
}

export default App;
