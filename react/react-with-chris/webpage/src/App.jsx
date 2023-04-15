import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const computerOpponentUrl = 'http://localhost:5051/rps'

function Button(props){
  const {text, fire} = props
  return <button style={{backgroundColor: 'lime', color: 'black', margin: 4}} 
  onClick={fire}>{text}</button>
}

function App() {
  const [myGuess, setMyGuess] = useState('No guess yet') 
  const [computerGuess, setComputerGuess] = useState('No guess yet')
  const [lastGuessTime, setLastGuessTime] = useState(new Date())

  let myGuessString = 'You have not guessed yet'
  if (myGuess != 'No guess yet') 
      myGuessString = 'You guessed '+myGuess

  let computerGuessString = 'Computer has not guessed yet'
  if (computerGuess != 'No guess yet') 
      computerGuessString = 'Computer guessed '+computerGuess

  let result = "It was a tie"
  if (myGuess != 'No guess yet' || computerGuess == 'No guess yet') 
      computerGuessString = 'Computer Guess '+computerGuess

  if (
    (myGuess == 'rock' && computerGuess == 'scissors') ||
    (myGuess == 'paper' && computerGuess == 'rock') ||
    (myGuess == 'scissors' && computerGuess == 'paper')
  ) result = "You won!"

  if (
    (myGuess == 'rock' && computerGuess == 'paper') ||
    (myGuess == 'paper' && computerGuess == 'scissors') ||
    (myGuess == 'scissors' && computerGuess == 'rock')
  ) result = "The Computer won!"

  useEffect(()=>{
    if (myGuess == 'No guess yet') return;

    async function getComputerGuess(){
      const result = await fetch(computerOpponentUrl)
      const guess = await result.text()
      setComputerGuess(guess)
    }

    getComputerGuess()    
  }, [myGuess, lastGuessTime])

  function setGuess(guess) {
    setMyGuess(guess)
    setLastGuessTime(new Date())
  }

  return (
    <div>          
      <h1>Welcome to Rock Paper Scissors</h1>
      <div>{myGuessString}</div>
      <div>{computerGuessString}</div>
      <div>{result}</div>
      <br />
      <Button text="Rock" fire={()=>{setGuess('rock')}}/>
      <Button text="Paper" fire={()=>{setGuess('paper')}}/>
      <Button text="Scissors" fire={()=>{setGuess('scissors')}}/>
    </div>
  )
}

export default App
