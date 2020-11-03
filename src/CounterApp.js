import React from "react";
import PropType from "prop-types";

const CounterApp = ({ value }) => {
  const handleAdd = (event) => {
    console.log(event);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> Valor : {value} </h2>
      <button onClick={handleAdd}> +1</button>
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
