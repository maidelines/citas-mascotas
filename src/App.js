import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario.js";
import Cita from "./components/Cita.js";
function App() {
  //Implementar LocalStore
 let citasIniaciales=JSON.parse(localStorage.getItem('citas'));
 if(!citasIniaciales){
   citasIniaciales=[];
 }

  //Arreglo de citas
  const [citas, arregloCitas] = useState([]);

  //useEffet para realizar ciertas operaciones cdo el state cambia
  useEffect(() => {
    if(citasIniaciales)
    {
      localStorage.setItem('citas',JSON.stringify(citas));
    }
    else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  }, [citas]);

  //Función que tome las citas actuales y agregue las nuevas
  const crearCita = (cita) => {
    arregloCitas([
      ...citas, // mantiene en el arreglo las que ya existen
      cita,
    ]);
  };
  const eliminarCita = id => {
    const nuevaCitas = citas.filter(cita=>cita.id!==id); // funciona como un for o un foreach cita son variables creadas
    arregloCitas(nuevaCitas);
  }
  
//Mensaje Opcional
const titulo = citas.length===0 ? 'No Hay Citas': 'Administrar Citas';
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita=>(
              <Cita
              key ={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
