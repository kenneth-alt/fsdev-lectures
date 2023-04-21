import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState('Ken')

  return (
    <div style={{
      width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'grow', flexDirection: 'column'
      }}>
        <div style={{ flexGrow: 1}}>
          <MainPage user={user} />
        </div>
      <Footer user={user} setUser={setUser} />
    </div>
  )
}

export default App