import styles from "./Keyboard.module.css"
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    addGuessedLetter: (letter: string) => void,
    incorrectLetters: string[],
    correctLetters: string[],
    disabled: boolean
}

export function Keyboard({ addGuessedLetter, incorrectLetters, correctLetters, disabled }: KeyboardProps) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px,1fr))', gap: '.5rem', alignSelf: 'stretch' }}>
            {KEYS.map(key => {
                const isInactive = incorrectLetters.includes(key)
                const isActive = correctLetters.includes(key)
                return (
                    <button
                        key={key}
                        className={`${styles.btn} ${isInactive && styles.inactive} ${isActive && styles.active}`}
                        onClick={() => addGuessedLetter(key)}
                        disabled={isActive || isInactive || disabled}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}