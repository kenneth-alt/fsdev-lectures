import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import LoginScreen from './components/LoginScreen';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div style={{
      width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'grow', flexDirection: 'column'
      }}>
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {user != null ? 
            <MainPage user={user} /> :
            <LoginScreen setUser={setUser} /> 
          }
          </div>
          <Footer user={user} setUser={setUser} />
          
    </div>
  )
}

export default App