import React, { useState, useEffect } from 'react';
import './App.css'

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
     async function getData() {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, []);

  return (
    <div>
      
      {data.map(message => {
        return <div>{message}</div>
      })}

    </div>
  )
}

export default Data
