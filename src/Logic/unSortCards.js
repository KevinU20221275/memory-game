import { imagesLength } from "./dataImages.js";

export function unSortCards(){
    let imgIndexArray = []
    for (let i = 0; i < imagesLength; i++){
        imgIndexArray.push(i)
    }

    imgIndexArray = imgIndexArray.sort(function() {return Math.random() - 0.5});
    
    return imgIndexArray;
}