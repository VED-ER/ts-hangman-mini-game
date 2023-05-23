import { useEffect, useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing"
import { HandmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import words from './words.json'

const getWord = () => words[Math.floor(Math.random() * words.length)]

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(l => !wordToGuess.includes(l))
  const correctLetters = guessedLetters.filter(l => wordToGuess.includes(l))

  const isWinner = wordToGuess.split('').every(l => correctLetters.includes(l))
  const isLoser = incorrectLetters.length >= 6

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return

    setGuessedLetters(prevLetters => ([...prevLetters, letter]))
  }



  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log('in');

      if (!e.key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(e.key)
    }

    document.addEventListener('keypress', handler)

    return () => { document.removeEventListener('keypress', handler) }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener('keypress', handler)

    return () => { document.removeEventListener('keypress', handler) }
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', gap: '2rem', margin: '0 auto' }}>
      <div style={{ fontSize: '2rem' }}>
        {isWinner && <span>You won! - Enter or Refresh to play again</span>}
        {isLoser && <span>You lost! - Enter or Refresh to play again</span>}
      </div>
      <HangmanDrawing numOfGuesses={incorrectLetters.length} />
      <HandmanWord isLoser={isLoser} correctLetters={correctLetters} wordToGuess={wordToGuess} />
      <Keyboard
        disabled={isWinner || isLoser}
        addGuessedLetter={addGuessedLetter}
        incorrectLetters={incorrectLetters}
        correctLetters={correctLetters}
      />
    </div>
  )
}

export default App
