import React, { Fragment, useState } from "react";
import uuid from 'uuid/dist/v4'; //crea Id
import PropTypes from 'prop-types';
const Formulario = ({crearCita}) => {
  //Crear el State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  //Función que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  //Extraer los valores
  const { mascota, dueño, fecha, hora, sintomas } = cita;
  //Cuando el usuario presiona enviar formulARIO
  const submitCita = (e) => {
    e.preventDefault(); //Previene accion  por defecto en este caso enviar el formulario por get y ponerlo en la URL
    //Validar que no existan datos vacíos //trim elimina los espacios vación en un text, siempre que valides hay que poner un return para que no se continúe ejecutando el codigo
    if (
      mascota.trim() === "" ||
      dueño.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ){
    actualizarError(true);
    return;  
}
    //Eliminar Mensaje de error
    actualizarError(false);
     //Asignar ID
    cita.id = uuid();    
    //Crear la Cita
    crearCita(cita);

    //Reiniciar Formulario
    actualizarCita({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    })
}
    //Eliminar Cita
    
    //actualizarError(false);
    //Asignar ID
   // cita.id = uuid();
  // cita.id=20
   // console.log(cita);
    //Crear la Cita
 

  return (
    <Fragment>
      <h2>Creando citas</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Nombre de Dueño"
          onChange={actualizarState}
          value={dueño}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          type="text"
          name="sintomas"
          className="u-full-width"
          placeholder="Sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Citas
        </button>
      </form>
    </Fragment>
  );
};
Formulario.prototype={
  crearCita: PropTypes.func.isRequired
}
export default Formulario;
