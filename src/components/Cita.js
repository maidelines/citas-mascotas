import React from "react";
import PropTypes from 'prop-types';
// dato importante la cita que se pasa en el metodo se extrae del useState de Formulario 
const Cita =({cita, eliminarCita})=> (
    
    <div className="cita">
        <p>Mascota:<span>{cita.mascota}</span></p>
        <p>Dueño:<span>{cita.dueño}</span></p>
        <p>Fecha:<span>{cita.fecha}</span></p>
        <p>Hora:<span>{cita.hora}</span></p>
        <p>Sintomas:<span>{cita.sintomas}</span></p>
        <button className="button eliminar u-full-width"
        onClick ={()=>eliminarCita(cita.id)} //Para elminar datos siempre hay que realizarlo con un arrow Function
        >Eliminar&times;</button>
    </div>
)

//Protypes para documentar los componentes donde se pone lo requerido para cada compente que se pasa en el App
Cita.propTypes={
    cita:PropTypes.object.isRequired,
    eliminarCita:PropTypes.func.isRequired
}
export default Cita;


