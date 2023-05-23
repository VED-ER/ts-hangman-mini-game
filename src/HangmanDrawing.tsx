const HEAD = (
    <div style={{ width: '30px', height: '30px', borderRadius: '100%', border: '10px solid black', position: 'absolute', right: -20, top: 25 }} />
)

const BODY = (
    <div style={{ width: '10px', height: '140px', backgroundColor: "black", position: 'absolute', right: 0, top: 65 }} />
)

const LEFT_ARM = (
    <div style={{ width: '80px', height: '10px', backgroundColor: "black", position: 'absolute', right: 10, top: 105, rotate: '30deg', transformOrigin: 'bottom right' }} />
)
const RIGHT_ARM = (
    <div style={{ width: '80px', height: '10px', backgroundColor: "black", position: 'absolute', right: -80, top: 105, rotate: '-30deg', transformOrigin: 'bottom left' }} />
)

const RIGHT_LEG = (
    <div style={{ width: '80px', height: '10px', backgroundColor: "black", position: 'absolute', right: -70, top: 195, rotate: '50deg', transformOrigin: 'bottom left' }} />
)
const LEFT_LEG = (
    <div style={{ width: '80px', height: '10px', backgroundColor: "black", position: 'absolute', right: 0, top: 195, rotate: '-50deg', transformOrigin: 'bottom right' }} />
)

type HandmanDrawingProps = {
    numOfGuesses: number
}

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]

export function HangmanDrawing({ numOfGuesses }: HandmanDrawingProps) {
    return (
        <div style={{ position: 'relative' }}>
            {BODY_PARTS.map((part, index) => {
                if (index < numOfGuesses) return <div key={index}>{part}</div>
            })}
            <div style={{ width: '10px', height: '30px', backgroundColor: "black", position: 'absolute', right: 0 }} />
            <div style={{ width: '150px', height: '10px', backgroundColor: "black", marginLeft: '95px' }} />
            <div style={{ width: '10px', height: '350px', backgroundColor: "black", marginLeft: '95px' }} />
            <div style={{ width: '200px', height: '10px', backgroundColor: "black" }} />
        </div>
    )
}