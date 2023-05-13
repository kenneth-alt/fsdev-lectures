import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await fetch('/api');
        const message = await response.text();
        setMessage(message);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMessage();
  }, []);

  return (
    <div>
      <p>Kenneth's webpage</p>
      {message}
    </div>
  )
}

export default App
