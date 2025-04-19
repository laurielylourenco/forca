type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
  }
  
  export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.25em",
          fontSize: `clamp(2rem, 5vw, 5rem)`, // Ajuste fluido
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "monospace",
          maxWidth: "100%",
          wordBreak: "break-word",
        }}
      >
        {wordToGuess.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              borderBottom: "0.1em solid black",
              display: "inline-block",
              minWidth: "0.6em",
              textAlign: "center",
            }}
          >
            <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>
              {letter}
            </span>
          </span>
        ))}
      </div>
    );
  }
  