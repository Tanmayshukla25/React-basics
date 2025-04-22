// import { useState } from 'react'
// import './App.css'
// // import { createLogger } from 'vite'


// function App() {
//   const [showtext, setShow] = useState(true)

//   function toggel() {
//     setShow(false)
//     if(showtext===false){
//       setShow(true)
//     }
//     console.log(showtext);
    
//   }
//   return (
//     <>
//       <button onClick={toggel}>Click me</button>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
 import './App.css'
function App() {
  const [inputtext, setInputdata] = useState("");
  const [storeData, setStoredata] = useState("");

  function DataShow() {
    
    setStoredata(inputtext .split('').reverse().join(''));

  }

  return (
    <>
      <input type="text" value={inputtext} onChange={(e) => setInputdata(e.target.value)} placeholder="Enter Text"
      />
      <button onClick={DataShow}>Click Me</button>
      <h2>{storeData}</h2>
    </>
  );
}

export default App;


