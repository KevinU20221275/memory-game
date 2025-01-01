import { imagesLength } from "./dataImages.js"

export const checkWinner = (pairdFound) => {
    if (pairdFound == imagesLength / 2){
      return true
    }
}