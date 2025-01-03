export function Square({itemName, imgSrc, defaulImg, flipCard, index}){
  
    const handleClick = () =>{
      flipCard(index, itemName)
    }
  
    return (
      <div onClick={handleClick} className="square w-full h-full overflow-hidden">
        <div className="flip-card show-card-face relative p-1 hover:cursor-pointer">
          <div className="front-face flex justify-center items-center overflow-hidden rounded absolute top-0 z-20 ">
            <figure>
              <img src={imgSrc} alt={itemName} />
            </figure>
          </div>
          <div className="back-face flex justify-center items-center overflow-hidden rounded">
            <figure>
              <img src={defaulImg} alt="default img" />
            </figure>
          </div>
        </div>
      </div>
    )
  }