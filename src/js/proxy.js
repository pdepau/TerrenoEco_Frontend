// -----------------------------------------------------------------
// Autor: Luis Belloch
// Descripcion: Logica del negocio del cliente para contactar a la API
// Creado: 14/10/2021
// -----------------------------------------------------------------

// "http://localhost:3000/" Por defecto
const url = new URL("http://localhost:8000/");

/**
 * setup()
 * Averigua si existe una sesion iniciada
 *
 */
 async function setup() {
  fetch(url, { method: "get" }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.debug("Sesion iniciada")
      });
    } else {
      console.error("No existe una sesion")
    }
  });
}

/**
 *      obtenerTodasLasMediciones()
 * [medicion] <=
 * 
 * Recibe las mediciones de la base de datos
 *
 */
async function obtenerTodasLasMediciones(cb) {
  fetch(url + `mediciones`, { method: "get" }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        return cb(JSON.stringify(json));
      });
    } else {
      
    }
  });
}

/**
 *      obtenerTodosLosNodos()
 * [nodo] <=
 * 
 * Recibe los nodos de la base de datos
 *
 */
 async function obtenerTodosLosNodos(cb) {
  fetch(url + `nodos`, { method: "get" }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        return cb(JSON.stringify(json));
      });
    } else {
      
    }
  });
}

/**
 * 
 * idUsuario:Z,
 * cuantas:Z =>
 *      obtenerUltimasMedicionesDeUsuario()
 * [medicion] <=
 * 
 * Recibe las medidas de la base de datos
 *
 * @param {callback} cb 
 * @param {number} idUsuario 
 * @param {number} cuantas 
 */
 async function obtenerUltimasMedicionesDeUsuario(cb,idUsuario,cuantas) {
  fetch(url + 'ultimasMediciones/'+idUsuario+'/'+cuantas, { method: "get" }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        return cb(JSON.stringify(json));
      });
    } else {
      
    }
  });
}

/**
 * posicion1:Posicion,
 * posicion2:Posicion,
 * t_inicio:Z,
 * t_final:Z,
 * tipo:Z =>
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
 * mediciones:[medicion],
 * factor:Z =>
 *      interpolarMediciones()
 * mediciones:[medicion] <=
 * 
 * @param {[medicion]} mediciones de base
 * @param {number} factor para crear nuevas mediciones
 * @returns lista de medidas interpoladas
 */
/* NO ESTA EN USO
function interpolarMediciones(mediciones, factor) {
  let interpolados = [];
  let points = [];
  const j_mediciones = JSON.parse(mediciones);
  j_mediciones.forEach((medicion) => {
    points.push([medicion.latitud, medicion.longitud, medicion.valor]);
    // Insertamos los valores de la entrada en la misma salida
    interpolados.push({
      lat: medicion.latitud,
      lng: medicion.longitud,
      valor: medicion.valor,
    });
  });

  // Toma valores de las mediciones minimo y maximo para acotar la interpolacion
  // por el factor
  const LatMax = Math.max.apply(
    Math,
    j_mediciones.map(function (o) {
      return o.latitud;
    })
  );
  const LonMax = Math.max.apply(
    Math,
    j_mediciones.map(function (o) {
      return o.longitud;
    })
  );
  const LatMin = Math.min.apply(
    Math,
    j_mediciones.map(function (o) {
      return o.latitud;
    })
  );
  const LonMin = Math.min.apply(
    Math,
    j_mediciones.map(function (o) {
      return o.longitud;
    })
  );

  // Crea los valores de lat y lon para los datos discretos, el factor es la
  // cantidad de medidas de salida entre medidas de entrada
  const cantidad = j_mediciones.length * factor;
  const diferencia = LonMax - LonMin;

  const escalon = diferencia / cantidad;

  // Para cada latitud
  for (let i = 0; i < cantidad; i++) {
    // Para cada longitud
    for (let j = 0; j < cantidad; j++) {
      // Averiguamos la distancia del punto actual respecto a los puntos
      // input
      // Punto actual, calculado a partir del punto minimo y sumando escalones
      let nPunto = new Punto(LatMin + escalon * i, LonMin + escalon * j);

      // Para cada punto input averiguamos la distancia y despues
      // calculamos la media ponderada usando pesos
      let total = 0;
      let totalPesos = 0;
      points.forEach((p) => {
        let aPunto = new Punto(p[0], p[1]);
        let distancia = nPunto.distancia(aPunto);
        // Calcula el peso que tiene aPunto en el que estamos
        // calculando, que es inversamente proporcional a la
        // cantidad de nodos por los que pasa antes de llegar a
        // nPunto
        // p[2] es la magnitud
        total += p[2] * (distancia / escalon);
        totalPesos += distancia / escalon;
      });

      let mediaPonderada = total / totalPesos;

      interpolados.push({
        lat: LatMin + escalon * i,
        lng: LonMin + escalon * j,
        valor: mediaPonderada,
      });
    } // for j
  } // for i

  return interpolados;
} // ()
  */
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
      document.getElementById("cuerpo").innerHTML = "Error 404";
    }
  });
}