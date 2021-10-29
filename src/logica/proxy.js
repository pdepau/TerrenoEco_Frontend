// -----------------------------------------------------------------
// Autor: Luis Belloch
// Descripcion: Logica del negocio del cliente para contactar a la API
// Creado: 14/10/2021
// -----------------------------------------------------------------

import mapControl from "./mapControl.js";
// "http://localhost:3000/" Por defecto
const url = new URL("http://localhost:8000/")

let botonMedidas = document.getElementById("botonMedidas");
botonMedidas.addEventListener("click", obtenerTodasLasMedidas, false);

// --------------------------------------------------------------
//#region get
// --------------------------------------------------------------
/**
 * obtenerTodasLasMedidas() -> JSON de las medidas
 * Recibe las medidas de la base de datos
 *
 * 
 */
async function obtenerTodasLasMedidas() {

  fetch(url + `medidas`, {method: 'get'})
  .then(response => {
      if (response.ok) {
        response.json()
        .then(json => {
          mapControl.addMarkers(json);
          return json;
        });
        
      } else {
        document.getElementById("cuerpo").innerHTML = "Error 404";
      }
    });
}

/**
 * obtenerUltimaMedida() -> JSON con la medida
 * Recibe la ultima medida de la base de datos
 *
 * 
 */
 async function obtenerUltimaMedida() {

  fetch(url + `medida/ultima`, {method: 'get'})
  .then(response => {
      if (response.ok) {
        response.json()
        .then(json => {
          mapControl.addMarkers(json);
          return json;
        });
        
      } else {
        document.getElementById("cuerpo").innerHTML = "Error 404";
      }
    });
}

//#endregion

export default obtenerTodasLasMedidas;