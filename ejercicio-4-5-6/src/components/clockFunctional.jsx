import React, { useState, useEffect } from 'react';

const Clockfunctional = () => {

  const [state, setState] = useState(
    {
      fecha: new Date(),
      edad: 0,
      nombre: 'Martín',
      apellidos: 'San José'
    }
  )

  const tick = () => {
      setState((prevState) => {
          let edad = prevState.edad +1;
          return {
              ...prevState,
              fecha: new Date(),
              edad
          }
      });
  }

  useEffect(() => {
    const timerID = setInterval (
            () => tick(), 1000
        )

    return () => {
      clearInterval (this.timerID);
    }
  }, [])
  return (
    <div>
      <div>
          <h2>
              Hora Actual:
              {state.fecha.toLocaleTimeString()}
          </h2>
          <h3>{state.nombre} {state.apellidos}</h3>
          <h1>Edad: {state.edad}</h1>
      </div>
    </div>
  )  
}

export default Clockfunctional;
