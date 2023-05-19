import React, { useState, useEffect } from 'react';
import './App.css'

function Message() {
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
      
      {message}

    </div>
  )
}

export default Message