import { useEffect } from 'react';
import './App.css';
import Login from './login';

import axios from 'axios';
const fetchData = async () =>{
  const response = await axios.get('http://www.localhost:5000');
  console.log(response.data);
}

useEffect(()=>{
  fetchData();
}, [])

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
