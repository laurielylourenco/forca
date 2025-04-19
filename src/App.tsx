
import { useCallback, useEffect, useState } from 'react'
import words from './wordListPT.json'
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';
import { GameFinal } from './GameFinal';

function App() {
	const [wordToGuess] = useState(() => {

		return words[Math.floor(Math.random() * words.length)]
	})

	const [guessedLetters, setGuessLetters] = useState<string[]>([]);
	const inCorrectLetters = guessedLetters.filter(
		letter => !wordToGuess.includes(letter)
	)

	const isLoser = inCorrectLetters.length >= 6 // numero de partes do corpos
	const isWinner = wordToGuess
		.split("")
		.every(letter => guessedLetters.includes(letter))



	const addGuessedLetter = useCallback((letter: string) => {

		if (guessedLetters.includes(letter)) {
			// já ta foi digitada 
			return
		}

		setGuessLetters(currentLetters => [...currentLetters, letter]);


	}, [guessedLetters])

	useEffect(() => {

		const handler = (e: KeyboardEvent) => {
			const key = e.key
			if (!key.match(/^[a-z]$/)) return

			e.preventDefault()

			addGuessedLetter(key)
		}

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		}

	}, [guessedLetters]);

	function restartGame() {
		window.location.reload()
	}


	return <div style={{
		maxWidth: "800px",
		display: "flex",
		flexDirection: "column",
		gap: "2rem",
		margin: "0 auto",
		alignItems: "center"
	}}>
		<GameFinal
			isGameOver={isWinner || isLoser}
			hasWon={isWinner}
			onRestart={restartGame}
		/>

		<HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
		<HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />


		<div style={{ alignSelf: "stretch", maxHeight: "350px" }}>
			<Keyboard
				disabled={isWinner || isLoser}
				activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
				inactiveLetters={inCorrectLetters}
				addGuessedLetter={addGuessedLetter}
			/>
		</div>

	</div>
}

export default App
