import { useContext } from "react"
import { ScoreContext } from "../context/gameContext"
import "./Score.css"

export function Score({resetGame, initGame}){

    const { score } = useContext(ScoreContext)

    const handleClick = () => {
        resetGame()
    }
    
    return (
        <div className='score w-36 h-36 text-white'>
            <div className="flex justify-center items-center flex-col gap-2">

            <button onClick={handleClick} className="py-2 px-4 bg-blue-800 text-white rounded outline-none border-none hover:cursor-pointer hover:bg-[#00f5]">{initGame ? 'Reset': 'Start'}</button>
            {initGame && <h3 className="text-2xl">Score: {score}</h3>}
            </div>
        </div>
    )
}