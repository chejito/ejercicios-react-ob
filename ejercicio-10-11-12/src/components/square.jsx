import React, { useState, useEffect } from 'react';

const Square = () => {

  const [color, setColor] = useState({red: 0, green: 0, blue: 0})
  const [insideDiv, setInsideDiv] = useState(false)

  useEffect(() => {
    if (insideDiv) {
      const intervalID = setInterval(() => {
        setColor(
          {
            red: randomColor(),
            green: randomColor(),
            blue: randomColor()
          }
        )   
      }, 1000)

      return () => {
        clearInterval(intervalID)
      }    
    }    
  }, [insideDiv])
  
  const squareStyle = {
    height: '255px',
    width: '255px',
    backgroundColor: `rgb(${color.red},${color.green},${color.blue})`
  }

  const enterDiv = () => {
    setInsideDiv(true)
  }
  
  const exitDiv = () => {
    setInsideDiv(false)
  }

  const twoClicks = () => {
    setInsideDiv(!insideDiv)
  } 
  
  const randomColor = () => Math.round(Math.random() * 255)

  return (
    <div style={ squareStyle } 
      onMouseEnter={enterDiv} 
      onMouseLeave={exitDiv} 
      onDoubleClick={twoClicks}/>
  );
}

export default Square;
