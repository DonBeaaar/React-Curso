import React from "react";
import PropType from "prop-types";

// Comunicación entre componentes desestructuada
const PrimeraApp = ({saludo, subtitulo}) => {
  return (
    // Fragment corto
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

//Definición de tipado de los props
PrimeraApp.propTypes = {
    saludo: PropType.string
}

//Valores por defecto en los componentes
PrimeraApp.defaultProps= {
    subtitulo: "Soy un subtitulo"
}

export default PrimeraApp;
