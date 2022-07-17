
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Table from './table';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://search-back.herokuapp.com?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app">
       <h1 className='head'>Search Box</h1>
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      {<Table data={data} />}
    </div>
  );
}

export default App;
