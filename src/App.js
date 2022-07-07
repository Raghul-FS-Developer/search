
import { useEffect, useState } from 'react';
import './App.css';
import { Data } from './data';

import Table from './table';

function App() {
  const [query,setQuery] = useState("");


  const keys =["first_name","last_name","email"];

  const search = (data) =>{
    return data.filter((item) =>keys.some((keys)=>item[keys].toLowerCase().includes(query)))
  }



  return (
    <div className="app">
    <h1 className='head'>Search Box</h1>
    <input type='text' placeholder='search...' className='search' onChange={(e)=>setQuery(e.target.value)}/>
    <ul className='list'>
    
      <Table data={search(Data).slice(0,20)}/>
    </ul>
    </div>
  );
}

export default App;
