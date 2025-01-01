import { useContext } from "react"
import { ScoreContext } from "../context/gameContext"

export function WinnerModal({ handleResetGame }){
  const { score } = useContext(ScoreContext)

    const handleReset = () =>{
      handleResetGame()
    }

    return (
      <section className="winnerModal z-50 h-60 w-80 text-white flex justify-center items-center rounded-lg bg-slate-950">
        <div className="text-center">
          <h1 className="text-2xl bg-gradient-to-br from-violet-300 to-violet-600 bg-clip-text text-transparent">You Win</h1>
          <h5 className="text-xl">Score: {score} points</h5>
          <button onClick={handleReset} className="py-2 px-4 mt-2 bg-blue-800 text-white rounded outline-none border-none hover:cursor-pointer hover:bg-[#00f5]">Play Again</button>
        </div>
      </section>
    )
}