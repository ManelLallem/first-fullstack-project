import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css'


function App(props) {
  const [name, setName] = useState('');
  const getName=async()=>{
    const response = await axios.get('http://localhost:5000/api/random-name');
    setName(response.data.name);
  }
  useEffect(() => {
    getName();
}, []);
  return (
    <div id='container'>
      <h1>Random Name Generator </h1>
      <h2>{name}</h2>
      <input type="button" value="Generate a new name" onClick={()=>getName()} />
    </div>
  );
}

export default App;