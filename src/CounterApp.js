import React, { useState } from "react";
import PropType from "prop-types";

const CounterApp = ({ value }) => {
  //HOOKs https://es.reactjs.org/docs/hooks-intro.html
  // Desesctructuramos el array del useState
  const [counter, setCounter] = useState(value); // returnn []

  const handleAdd = () => {
    // setCounter( (c) => c + 1 )
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> Valor : {counter} </h2>
      <button onClick={handleAdd}> +1</button>
      <button onClick={handleReset}> Reset</button>
      <button onClick={() => setCounter(counter - 1)}> -1</button>
    </>
    // Eventos del botón
    // Docu: https://es.reactjs.org/docs/events.html
    // mismo que onClick={ (event)=>{console.log(event)}}
  );
};

CounterApp.propTypes = {
  value: PropType.number.isRequired,
};

export default CounterApp;
