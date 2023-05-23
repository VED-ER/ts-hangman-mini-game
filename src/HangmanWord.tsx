type HandmanWordProps = {
    correctLetters: string[],
    wordToGuess: string,
    isLoser: boolean
}

export function HandmanWord({ correctLetters, wordToGuess, isLoser }: HandmanWordProps) {

    return (
        <div style={{ fontSize: '5rem', fontFamily: 'monospace', display: 'flex', gap: '.25em', textTransform: 'uppercase', fontWeight: 'bold' }}>
            {wordToGuess.split('').map((w, i) => {
                const guessed = correctLetters.includes(w)
                return (
                    <span key={i} style={{ borderBottom: 'solid 10px black' }}>
                        <span style={{ visibility: guessed || isLoser ? 'visible' : 'hidden', color: isLoser && !guessed ? 'red' : '' }}>{w}</span>
                    </span>
                )
            })}
        </div>
    )
}