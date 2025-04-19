import "./css/HangmanDrawing.css"

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HEAD = <div className="hangman-part head"></div>

const BODY = <div className="hangman-part body"></div>

const RIGHT_ARM = <div className="hangman-part right-arm"></div>

const LEFT_ARM = <div className="hangman-part left-arm"></div>

const RIGHT_LEG = <div className="hangman-part right-leg"></div>

const LEFT_LEG = <div className="hangman-part left-leg"></div>

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="hangman-container">
      <div className="hangman-drawing">
        {BODY_PARTS.slice(0, numberOfGuesses)}

        <div className="hangman-rope"></div>
        <div className="hangman-beam"></div>
        <div className="hangman-post"></div>
        <div className="hangman-base"></div>
      </div>
    </div>
  )
}
