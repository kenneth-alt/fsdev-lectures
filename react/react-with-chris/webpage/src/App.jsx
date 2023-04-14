import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button(props){
  const {text, fire} = props
  return <button style={{backgroundColor: 'white', color: 'black', margin: 4}} onClick={fire}>{text}</button>
}

function App() {
  const [myGuess, setMyGuess] = useState('No guess yet') 

  let myGuessString = 'You have not guessed yet'
  if (myGuess != 'No guess yet') myGuessString = 'You guessed '+myGuess

  useEffect(()=>{
    console.log('You made a new choice of', myGuess)
  }, [myGuess])

  return (
    <div>          
      <h1>Welcome to Rock Paper Scissors</h1>
      <div>{myGuessString}</div>
      <br />
      <Button text="Rock" fire={()=>{setMyGuess('rock')}}/>
      <Button text="Paper" fire={()=>{setMyGuess('paper')}}/>
      <Button text="Scissors" fire={()=>{setMyGuess('scissors')}}/>
    </div>
  )
}

export default App
