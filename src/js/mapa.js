// -------------------------------------------------------------
// Autores: Adrián Maldonado, Luis Belloch
// Descripción: Funciones y configuracion del mapa leaflet
// Fecha: 20/11/2021
// -------------------------------------------------------------
var factorInterpolacion = 0;
const apiKey = 'f5d83cc1e4a37d1e1a2834d424e948bc';
//Margen de tiempo
//Temporalmente está con un valor fijo para que se vean
let fechaMax = 1637868163754; //new Date().getTime()
let fechaMin = fechaMax - 3600000;

//Layer para el mapa persé
//No hace falta tocar nada, a menos que se quiera cambiar el estilo
var baseLayer = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiemFraWwiLCJhIjoiY2t2MTNtcWJxMGttYzJvcGExdDNrZjB2eCJ9.-eGzsYW_IZcypdpOpoPLcA",
  {
    attribution: "",
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "your.mapbox.access.token",
  }
);

//Creación del mapa en el div con id = "map"
var map = new L.Map("map", {
  center: new L.LatLng(38.996852, -0.165307),
  zoom: 13,
  layers: [baseLayer],
});

var bounds = map.getBounds();

/**
 * Datos base para todo el codigo
 */
var datos = {
  latMax: bounds._northEast.lat,
  latMin: bounds._southWest.lat,
  lonMax: bounds._northEast.lng,
  lonMin: bounds._southWest.lng,
  tiempoMin: fechaMin,
  tiempoMax: fechaMax,
  factor: factorInterpolacion,
  tipo: datos.tipo,
};


//Estilo para el icono
var EcoParadaMarker = L.icon({
  iconUrl: "img/Ecoparada.png",
  //shadowUrl: 'img/Ecoparada.png',
  iconSize: [50, 50], // size of the icon
  //shadowSize: [50, 64], // size of the shadow
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [0, -10], // point from which the popup should open relative to the iconAnchor
});

function crearDivPopoup(so2, no2, co, o3, cerca) {
  let div =
    "<b>¡ECOPARADA!</b>" +
    "<br>Gandia<br><br>" +
    "<table><tr><th>SO2</th><th></th><th>NO2</th><th></th><th>CO</th><th></th><th>O3</th></tr>" +
    "<tr><td>μg/m3</td><td></td><td> μg/Nm3</td><td></td><td>mg/m3</td><td></td><td> μgr/m3</td></tr>" +
    "<tr><td>" +
    so2 +
    "</td><td></td><td>" +
    no2 +
    "</td><td></td><td>" +
    co +
    "</td><td></td><td>" +
    o3 +
    "</td></tr></table>";
  if (cerca) {
    div +=
      '<button onclick="enviarValoresConsola(' +
      so2 +
      "," +
      no2 +
      "," +
      co +
      "," +
      o3 +
      ')" class="botonRecompensa">OBTENER RECOMPENSA</button>';
  }

  return div;
}

/**
 * [marker] =>
 *      crearMarkers()
 * 
 * Crea los marcadores que se le envien
 * 
 * @param {array} markers [{lat, lon}]
 */
async function crearMarkers(markers) {
  var ecoparadas = [];

  for (let index = 0; index < markers.length; index++) {
    let lat = markers[index].lat;
    let lon = markers[index].lon;
    let response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    let body = await response.json();
    let co = body.list[0].components.co;
    let so2 = body.list[0].components.so2;
    let no = body.list[0].components.no;
    let o3 = body.list[0].components.o3;

    var marker1 = L.marker([lat, lon], {
      icon: EcoParadaMarker,
    }).bindPopup(crearDivPopoup(so2, no, co, o3, false));
    ecoparadas.push(marker1); 
  }

  var ecoparadasMapa = L.layerGroup(ecoparadas);

  ecoparadasMapa.addTo(map);

}

const marcadores = [
  {
    lat: 38.96797739,
    lon: -0.19109882
  },
  {
    lat: 39.24621837,
    lon: -0.3171898
  },
  {
    lat: 38.79521458,
    lon: -0.6827819
  }
];

crearMarkers(marcadores);

/**
 * Mapa IDW de interpolacion con ajustes
 * 
 * opacity - the opacity of the IDW layer
 * max - maximum point values, 1.0 by default
 * cellSize - height and width of each cell, 25 by default
 * exp - exponent used for weighting, 1 by default
 * gradient - color gradient config, e.g. {0.4: 'blue', 0.65: 'lime', 1: 'red'}
 */
var idw = L.idwLayer([
  [-37.8839, 175.3745188667, 571],
  [-37.8869090667, 175.3657417333, 486]],
  {opacity: 0.3, cellSize: 3, exp: 1, max: 1}).addTo(map);

//Funcion que se llama al recibir los datos del servidor
//Ahora mismo utiliza las medidas acotadas simplemente
//TODO : Hacer que haga la interpolación y utilice esos datos
async function callbackDatosRecibidos(x) {
  x = JSON.parse(x);
  //Devuelve la lista de regiones con valores
  medidasAgeoson(x);
}

//Pasa la lista de medidas formateadas por region a puntos para el mapa
function medidasAgeoson(medidas) {
  //console.log(medidas);
  let puntos = [];
  medidas.forEach((element) => {
    // Luis: La libreria idw no usa {lat,lng,valor}, usa un array normal
    puntos.push([
      element.lat,
      element.lng,
      element.valor/100 // para que este entre 0 y 1
    ]);
  });

  llenarMapa(puntos);
}

//Pone los valores en el layer del mapa de calor
function llenarMapa(puntos) {
  // Luis: implementacion de la libreria idw cada vez que se llena de datos. Así creo que
  // es más rápido al ejecutarse 
  if(puntos.length < 1) {
    puntos = [
      [39.0031, -0.156126, 0.1],
      [38.9919, -0.147516, 0.74]
      ];
  }
  map.removeLayer(idw);
  idw = L.idwLayer(puntos,
    {opacity: 0.3, cellSize: 3, exp: 1, max: 1}).addTo(map);
  // idw.data = puntos;
  console.debug(idw.data);
  // console.debug(idw.data)
}

var MarkerUbicacion = L.icon({
  iconUrl: "img/ubicador.svg",
  //shadowUrl: 'img/Ecoparada.png',
  iconSize: [20, 20], // size of the icon
  //shadowSize: [50, 64], // size of the shadow
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62], // the same for the shadow
});

function ponerUbicacion() {
  //Centrar el mapa en la ubicación proporcionada por el navegador
  map.locate({ setView: true, maxZoom: 16 });
  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map);

    L.circle(e.latlng, radius).addTo(map);

    //actualizarPopupMarkers(e.latlng.lat, e.latlng.lng);
  }
  function onLocationError(e) {
    alert(e.message);
  }
  map.on("locationfound", onLocationFound);
  map.on("locationerror", onLocationError);
}

//Se llama cada vez que se mueve el mapa
map.on("moveend", function (ev) {
  //Vuelve a obtener los margenes tras mover el mapa
  bounds = map.getBounds();

  //Vuelve a obtener la fecha
  fechaMax = 1640524043187; //new Date().getTime()
  fechaMin = fechaMax - 3600000;

  //Recalcula el objeto para la llamada
  datos.tiempoMax = fechaMax;
  datos.tiempoMin = fechaMin;

  console.debug(datos);
  
  obtenerMedicionesAcotadas(datos, callbackDatosRecibidos);
});

document.getElementById("fecha").addEventListener("input", (event) => {
  console.log(`Te gusta el sabor ${event.target.value}`);
  let date = new Date(event.target.value);
  date.setHours(document.getElementById("hora").value);
  console.log(date);

  //Vuelve a obtener la fecha
  fechaMax = date.getTime(); //new Date().getTime()
  fechaMin = fechaMax - 3600000;

  //Recalcula el objeto para la llamada
  datos.tiempoMax = fechaMax;
  datos.tiempoMin = fechaMin;

  obtenerMedicionesAcotadas(datos, callbackDatosRecibidos);
});

document.getElementById("hora").addEventListener("change", (event) => {
  let date = new Date(document.getElementById("fecha").value);
  date.setHours(document.getElementById("hora").value);
  console.log(date);

  //Vuelve a obtener la fecha
  fechaMax = date.getTime(); //new Date().getTime()
  fechaMin = fechaMax - 3600000;

  //Recalcula el objeto para la llamada
  datos.tiempoMax = fechaMax;
  datos.tiempoMin = fechaMin;

  obtenerMedicionesAcotadas(datos, callbackDatosRecibidos);
});

// -------------------------------------------------------------
// LEYENDA
// -------------------------------------------------------------
let leyenda = document.getElementById("leyenda");
//Ocultar y mostrar los datos para la leyenda
//No tiene nada que ver con el mapa persé
//Es solo funcionalidad
leyenda.addEventListener("click", function () {
  if (leyenda.classList.contains("expandido")) {
    let divs = Array.from(document.getElementsByClassName("leyenda-valor"));
    let divEco = Array.from(
      document.getElementsByClassName("ecoparada-leyenda")
    )[0];
    divs.forEach((element) => {
      element.style.display = "none";
    });
    divEco.style.display = "none";
    leyenda.style.height = "60px";
    leyenda.classList.remove("expandido");
  } else {
    leyenda.style.height = "230px";
    let divs = Array.from(document.getElementsByClassName("leyenda-valor"));
    let divEco = Array.from(
      document.getElementsByClassName("ecoparada-leyenda")
    )[0];
    divs.forEach((element) => {
      element.style.display = "inherit";
    });
    divEco.style.display = "inherit";
    leyenda.classList.add("expandido");
  }
});

// -------------------------------------------------------------
// FUNCIONES
// -------------------------------------------------------------
/**
 * tipo:Z =>
 *      selectorCambiado()
 *
 * Se llama cuando se cambia el tipo de concentracion a mostrar en el mapa. Cuando se
 * ejecuta llama la base de datos y asigna los valores de concentracion correspondientes
 *
 * @param {number} tipo numerico dependiendo del valor
 */
function selectorCambiado(tipo, botonPulsado) {
  // busca el boton activado
  let selectedButtons = document.getElementsByClassName("selected");
  // quita la clase al boton activado
  for (let button of selectedButtons) {
    button.classList.remove("selected");
  } // for
  // activamos el boton que se haya pulsado
  botonPulsado.classList.add("selected");
  switch (true) {
    case tipo == 1 && datos.tipo != 1:
      // CO2
      console.debug("CO seleccionado");
      datos.tipo = 1;
      obtenerTipo(datos.tipo, actualizarLeyenda);
      break;

    case tipo == 2 && datos.tipo != 2:
      // CO
      console.debug("CO2 seleccionado");
      datos.tipo = 2;
      obtenerTipo(datos.tipo, actualizarLeyenda);
      break;
    case tipo == 3 && datos.tipo != 3:
      // O3
      console.debug("O3 seleccionado");
      datos.tipo = 3;
      obtenerTipo(datos.tipo, actualizarLeyenda);
      break;
    default:
      break;
  }
}

/**
 * tipo:Json =>
 *      actualizarLeyenda()
 *
 * Actualiza la leyenda para el nuevo contaminante seleccionado
 *
 * @param {tipo} tipo recibido
 */
function actualizarLeyenda(tipo) {
  const tipoJson = JSON.parse(tipo);

  const leyendaAlto = document.getElementById("leyendaAlto");
  const leyendaMedio = document.getElementById("leyendaMedio");
  const leyendaBajo = document.getElementById("leyendaBajo");

  leyendaBajo.innerHTML = tipoJson[0].riesgo_leve + ' ppm'
  leyendaMedio.innerHTML = tipoJson[0].riesgo_medio + ' ppm';
  leyendaAlto.innerHTML = tipoJson[0].riesgo_alto + ' ppm';
}

//Ubicacion para acceder a ella en global
var ubicacion;
/**
 * Centra el mapa en la posicion proporcionada
 *
 * @param {long} lat
 * @param {long} lon
 */
function centrarMapaEnUbicacion(lat, lon) {
  if (ubicacion != null) {
    map.removeLayer(ubicacion);
  }

  ubicacion = L.marker([lat, lon], {
    icon: MarkerUbicacion,
  });

  map.addLayer(ubicacion);

  map.panTo(new L.LatLng(lat, lon));
  //Formateo del popup

  actualizarPopupMarkers(lat, lon);
}

/**
 * Actualiza los markers para que tengan el boton de calibración según la distancia
 *
 * @param {long} lat
 * @param {long} lon
 */
function actualizarPopupMarkers(lat, lon) {
  ecoparadas.forEach((ecoparada) => {
    let distancia = Math.sqrt(
      Math.pow(lat - ecoparada._latlng.lat, 2) +
        Math.pow(lon - ecoparada._latlng.lng, 2)
    );

    let distanciaEnMetros = distancia * 111110;

    if (distanciaEnMetros < 200) {
      ecoparada.bindPopup(crearDivPopoup(12, 13, 14, 15, true));
    }
  });
}

/**
 * Envia los valores de la Ecoparada al console para leerlos desde Android
 *
 * @param {int} so2
 * @param {int} no2
 * @param {int} co
 * @param {int} o3
 */
function enviarValoresConsola(so2, no2, co, o3) {
  console.log("DatosEcoparada," + so2 + "," + no2 + "," + co + "," + o3);
}

function setup() {
  //Objeto para la interpolación con los datos
  /**
    {
      "latMax":1,
      "latMin":32,
      "lonMax":1,
      "lonMin":2,
      "tiempoMin":1635496134293,
      "tiempoMax":1635496134293,
      "factor":2,
      "tipo":1
    }
  */
  //Llamada a la logica con un callback
  //
  obtenerMedicionesAcotadas(datos, callbackDatosRecibidos);
  obtenerTipo(datos.tipo, actualizarLeyenda);
}

setup();