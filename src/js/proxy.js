// -----------------------------------------------------------------
// Autor: Luis Belloch
// Descripcion: Logica del negocio del cliente para contactar a la API
// Creado: 14/10/2021
// -----------------------------------------------------------------

// "http://localhost:3000/" Por defecto
const url = new URL("http://localhost:8000/");

/**
 * obtenerTodasLasMedidas() -> JSON de las medidas
 * Recibe las medidas de la base de datos
 *
 *
 */
async function obtenerTodasLasMediciones(cb) {
  fetch(url + `mediciones`, { method: "get" }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        return cb(JSON.stringify(json));
      });
    } else {
      console.error("Error al obtener mediciones")
    }
  });
}

/**
 * obtenerTodosLosNodos() -> JSON de las nodos
 * Recibe las nodos de la base de datos
 *
 *
 */
 async function obtenerTodosLosNodos(cb) {
  fetch(url + `nodos`, { method: "get" }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        return cb(JSON.stringify(json));
      });
    } else {
      console.error("Error al obtener nodos");
    }
  });
}

/**
 * obtenerTodasLasMedidas() -> JSON de las medidas
 * Recibe las medidas de la base de datos
 *
 *
 */
 async function obtenerUltimasMedicionesDeUsuario(cb,idUsuario,cuantas) {
  fetch(url + 'ultimasMediciones/'+idUsuario+'/'+cuantas, { method: "get" }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        return cb(JSON.stringify(json));
      });
    } else {
      console.error("No se han podido tomar las ultimas mediciones del usuario");
    }
  });
}

/**
 * data:json =>
 *      obtenerMedicionesAcotadas()
 * Medidas:[medida] <=
 * 
 * @param {json} data para acotar las medidas
 * @param {callback} cb 
 */
async function obtenerMedicionesAcotadas(data, cb) {
  fetch(url + 'mediciones/acotadas'+'/'+data.latMax+'/'+data.latMin+'/'+data.lonMax+'/'+data.lonMin+'/'+data.tiempoMin+'/'+data.tiempoMax+'/'+data.tipo+'/'+data.factor, { method: "get" }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        //console.log(JSON.stringify(json));
        return cb(JSON.stringify(json));
      });
    } else {
      console.error("No se han podido recibir las mediciones con los datos: " + JSON.stringify(data));
    }
  });
}
/**
 * id:Z =>
 *      obtenerTipo()
 * Tipo:Tipo <=
 * 
 * @param {number} id del tipo a tomar de la base de datos
 * @param {callback} cb donde se recibe la respuesta
 */
function obtenerTipo(id, cb) {
  fetch(url + `tipo` + '/' + id, { method: "get" }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        return cb(JSON.stringify(json));
      });
    } else {
      console.error("Error al tomar el tipo");
    }
  });
}

/**
 * formulario =>
 *      iniciarSesion()
 * VoF <=
 * 
 * Inicia sesion en el servidor
 * 
 * @param {form} formulario 
 */
function iniciarSesion(cb) {
  const form = document.querySelector('form');
  const formData = new FormData(form);  
  /*Cuerpo del formulario: 
  [
    {"name":"correo","value":"correo@gmail.com"},
    {"name":"password","value":"contraseña"}
  ]
  */
  let payload = {
    correo: formData.get("correo"),
    password: formData.get("password")
  }
  let cuerpo = JSON.stringify(payload);
  fetch(url + `login`, { 
    method: "POST", 
    body: cuerpo, 
    headers: {"Content-type": "application/json; charset=UTF-8"} 
  }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        // TODO: aqui abre la pagina que tenga que ser
      });
    } else {
      console.error("Error al iniciar sesión");
      // TODO: mensaje de error si no se pone bien algun dato
    }
  });
}