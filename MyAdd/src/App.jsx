import React, { useState } from 'react'
import './App.css';

function App() {

  const [number, setNumber] = useState();
  const [number2, setNumber2] =useState();
  const [total, setTotal] = useState(number + number2|| 0);

  function addtotal (){
    setTotal(number + number2)
  }
  return (
  <div className="App">
    <h1>Let’s ADD Some Numbers Yeah?</h1>
    <div className='input-numbers'>
      <input type= "number" placeholder='0' value={number} onChange={e => setNumber(+e.target.value)} />
      <input type= "number" placeholder='0' value={number2} onChange={e => setNumber2(+e.target.value)} />
       </div>
      <button onClick={addtotal}>Add Numbers</button> 
      <h2>{total}</h2>
      </div>
           
  );
}

export default App
