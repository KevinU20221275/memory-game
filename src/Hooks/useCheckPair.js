import { useState, useContext } from "react"
import { ScoreContext } from "../context/gameContext"
import { checkWinner } from "../Logic/checkWinner"

export const useCheckPair = () => {
    const [pair, setPair] = useState([])
    const {setScore, pairsNumber, setPairNumber, setWinner, winner} = useContext(ScoreContext)

    const checkPair = (itemName, index) =>{

        let parArray = [... pair]

        parArray.push({itemName, index})

        setPair(parArray)

        if (parArray.length == 2){
            setTimeout(() => {
                const card1 = parArray[0]
                const card2 = parArray[1]

                let flipCards = document.querySelectorAll('.flip-card')
                if (card1.itemName != card2.itemName){

                    flipCards[card1.index].classList.remove('show-card-face')
                    flipCards[card2.index].classList.remove('show-card-face')

                    setScore((prevScore) => prevScore - 5)
                    
                } else {
                    let newPairNumber = pairsNumber + 1
                    setPairNumber((prevPairNumber) => prevPairNumber + 1)

                    if (checkWinner(newPairNumber)){
                        setWinner(true)
                    }
              
                    setScore((prevScore) => prevScore + 10)
                } 
            }, 600)

            setPair([])
        }
    } 

    const resetGame = () =>{
            document.querySelectorAll('.flip-card').forEach(card => {
                card.classList.add('show-card-face')
            })
            
            setTimeout(() => {
                document.querySelectorAll('.flip-card').forEach(card => {
                    card.classList.remove('show-card-face')
                })
            },2000)


        setScore(0)

        setPairNumber(0)

        setWinner(null)

        setPair([])
    }
    
    return { checkPair, resetGame, winner }
}
      
