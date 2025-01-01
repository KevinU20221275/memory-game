// hooks
import { useState } from 'react'
import { useCheckPair } from './Hooks/useCheckPair.js'
// components
import { Board } from './Components/Board.jsx'
import { WinnerModal } from './Components/WinnerModal.jsx'
import { Score } from './Components/Score.jsx'
// logic
import { unSortCards } from './Logic/unSortCards.js'


function App() {
  const [initGame, setInitGame] = useState(false)
  const [unSortArray, setUnSortArray] = useState([])
  const {winner, resetGame} = useCheckPair()

  const handleResetGame = () =>{
    resetGame()

    let newUnSortArray = unSortCards()

    setUnSortArray(newUnSortArray)

    setInitGame(true)
  }

  return (
    <>
      <main className='min-w-screen min-h-screen  flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-blue-500'>
        <h1 className='text-2xl bg-gradient-to-br from-black to-violet-600 bg-clip-text text-transparent mb-1'>Memory Game</h1>
          <section className="relative flex flex-wrap justify-center gap-3">
            
            {
              (initGame && <Board unSortArray={unSortArray}></Board>)
            }  
            
            {
              (winner && <WinnerModal handleResetGame={handleResetGame}></WinnerModal>)
            }

            {
              (winner === null && <Score resetGame={handleResetGame} initGame={initGame} ></Score>)
            }
            </section>
      </main>
    </>
  )
}

export default App
