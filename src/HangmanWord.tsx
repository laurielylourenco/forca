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
                gap: ".25em",
                fontSize: "6rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
                justifyContent: "center", 
                wordBreak: "break-word",
                textAlign: "center",
                maxWidth: "100%", 
            }}
        >
            {wordToGuess.split("").map((letter, index) => (
                <span
                    key={index}
                    style={{
                        borderBottom: ".1em solid black",
                        display: "inline-block",
                        minWidth: "0.6em", 
                        textAlign: "center"
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
