// -----------------------------------------------------------------
// Autor: Luis Belloch
// Descripcion: Logica del negocio del cliente para contactar a la API
// Creado: 14/10/2021
// -----------------------------------------------------------------

// "http://localhost:3000/" Por defecto
const url = new URL("http://localhost:8000/")

/**
 * obtenerTodasLasMedidas() -> JSON de las medidas
 * Recibe las medidas de la base de datos
 * 
 * 
 */
async function obtenerTodasLasMediciones() {

  fetch(url + `mediciones`, {method: 'get'})
  .then(response => {
      if (response.ok) {
        response.json()
        .then(json => {
          console.log(JSON.stringify(json));
          return JSON.stringify(json);
        });
        
      } else {
        document.getElementById("cuerpo").innerHTML = "Error 404";
      }
    });
}

export {obtenerTodasLasMediciones};