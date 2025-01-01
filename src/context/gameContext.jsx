import { createContext } from 'react'
import { useState } from 'react'

export const ScoreContext = createContext()

export const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0)
    const [pairsNumber, setPairNumber] = useState(0)
    const [winner, setWinner] = useState(null)
    
    return (
        <ScoreContext.Provider value={{
            score,
            setScore,
            pairsNumber,
            setPairNumber,
            winner,
            setWinner
        }}>
            {children}
        </ScoreContext.Provider>
    )
}