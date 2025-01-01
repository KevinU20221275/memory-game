import {Square} from './Square'
import { images, defaultSrc } from '../Logic/dataImages'
import { useCheckPair } from '../Hooks/useCheckPair'

export function Board({ unSortArray }){
  const { checkPair } = useCheckPair()

  if (unSortArray == null) return

  const flipCard = (index, itemName) =>{
    const square =  document.querySelectorAll('.flip-card')[index]

    if (square.classList.contains('show-card-face')) return

    square.classList.add('show-card-face')
  
    checkPair(itemName, index)
  }

    return (
      <div>
        <div className="board max-w-[570px] max-h-[570px] relative bg-blue-700 grid grid-cols-[repeat(3,minmax(80px,140px))] grid-rows-4 gap-1 p-2 rounded-md">        
          {
            unSortArray.map((n, index) => (
              <Square key={index} itemName={images[n].name} imgSrc={images[n].src} defaulImg={defaultSrc} index={index} flipCard={flipCard}></Square>
            ))
          }
        </div>
      </div>
    )
}