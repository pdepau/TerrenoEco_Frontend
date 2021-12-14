// -------------------------------------------------------------
// Autores: Adrián Maldonado, Luis Belloch
// Descripción: Funciones y configuracion del mapa leaflet
// Fecha: 20/11/2021
// -------------------------------------------------------------

//Layer para el mapa persé
//No hace falta tocar nada, a menos que se quiera cambiar el estilo
var baseLayer = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmVycmFuZ3Y5OCIsImEiOiJja3dhM2ExcWkwZjdlMnNxbGllNHk1djNtIn0.jp_9QtnYaRwvjpgKsQmWWg",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "your.mapbox.access.token",
  }
);

//Configuracion para el mapa de calor
var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  radius: 20,
  maxOpacity: 1,
  // scales the radius based on map zoom
  scaleRadius: false,
  // which field name in your data represents the latitude - default "lat"
  latField: "lat",
  // which field name in your data represents the longitude - default "lng"
  lngField: "lng",
  // which field name in your data represents the data value - default "value"
  valueField: "valor",
};

//Layer para el mapa de calor, hasta aquí esta todo como en la api
var heatmapLayer = new HeatmapOverlay(cfg);

//Creación del mapa en el div con id = "map"
var map = new L.Map("map", {
  center: new L.LatLng(38.996852, -0.165307),
  zoom: 13,
  layers: [baseLayer, heatmapLayer],
});

//Margenes del mapa en el html
//En plan la latitud máxima mostrada y tal
let bounds = map.getBounds();

//Funcion que se llama al recibir los datos del servidor
//Ahora mismo utiliza las medidas acotadas simplemente
//TODO : Hacer que haga la interpolación y utilice esos datos
async function f1(x) {
  x = JSON.parse(x);

  //Valores para hacer la cuadricula
  //Miran el rango de las latitudes y lo dividen en partes
  let delta = Math.abs(bounds._southWest.lng - bounds._northEast.lng) / 25;
  let deltaY = Math.abs((bounds._southWest.lat - bounds._northEast.lat) / 25);

  let puntos = [];

  //Crea la cuadricula de puntos con lat y lon
  for (let a = bounds._southWest.lng; a < bounds._northEast.lng; a += delta) {
    for (let b = bounds._southWest.lat; b < bounds._northEast.lat; b += deltaY) {
      puntos.push({
        latMax: b + deltaY,
        latMin: b,
        lonMax: a + delta,
        lonMin: a,
        valor: 0,
        cuantas: 1,
      });
    }
  }

  //Para cada medida comprueba en que cuadrado debe estar
  //mira que esté dentro del rango de lat y lon
  x.forEach((medida) => {
    puntos.forEach((element) => {
      if (
        medida.latitud > element.latMin &&
        medida.latitud < element.latMax &&
        medida.longitud > element.lonMin &&
        medida.longitud < element.lonMax
      ) {
        element.valor += (medida.valor - element.valor) / element.cuantas;
        element.cuantas++;
      }
    });
  });

  //let datos = interpolarMediciones(x, 4);
  //Devuelve la lista de regiones con valores
  medidasAgeoson(puntos);
}

//Margen de tiempo
//Temporalmente está con un valor fijo para que se vean
let fechaMax = 1637868163754; //new Date().getTime()
let fechaMin = fechaMax - 3600000;


// Ultimo tipo seleccionado en los botones
var tipoSeleccionado = 1;
//Objeto para la interpolación con los datos
let datos = {
  latMax: bounds._northEast.lat,
  latMin: bounds._southWest.lat,
  lonMax: bounds._northEast.lng,
  lonMin: bounds._southWest.lng,
  tiempoMin: fechaMin,
  tiempoMax: fechaMax,
  tipo: tipoSeleccionado,
};

//Llamada a la logica con un callback
//
obtenerMedicionesAcotadas(datos, f1);

//Pasa la lista de medidas formateadas por region a puntos para el mapa
function medidasAgeoson(medidas) {
  console.log(medidas);
  let puntos = [];
  medidas.forEach((element) => {
    puntos.push({
      lat: (element.latMax + element.latMin) / 2,
      lng: (element.lonMax + element.lonMin) / 2,
      valor: element.valor,
    });
  });
  //Define el valor de pico
  var GeoJSON_medidas = {
    max: 100,
    data: puntos,
  };
  llenarMapa(GeoJSON_medidas);
}

//Pone los valores en el layer del mapa de calor
function llenarMapa(puntos) {
  heatmapLayer.setData(puntos);
}

//Se llama cada vez que se mueve el mapa
map.on("moveend", function (ev) {
  //Vuelve a obtener los margenes tras mover el mapa
  let bounds = map.getBounds();

  //Vuelve a obtener la fecha
  let fechaMax = 1637868163754; //new Date().getTime()
  let fechaMin = fechaMax - 3600000;

  //Recalcula el objeto para la llamada
  let datos = {
    latMax: bounds._northEast.lat,
    latMin: bounds._southWest.lat,
    lonMax: bounds._northEast.lng,
    lonMin: bounds._southWest.lng,
    tiempoMin: fechaMin,
    tiempoMax: fechaMax,
    tipo: 2,
  };

  obtenerMedicionesAcotadas(datos, f1);
});

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

// TEMPORAL
// --------------
// Poner el icono en el mapa (marcador)
var marker = L.marker([38.5804, -0.1127], {
  icon: EcoParadaMarker,
}).addTo(map);
//Formateo del popup
marker.bindPopup(
  "<b>¡ECOPARADA!</b><br>Gandia<br><br>  <table><tr><th>SO2</th><th> </th><th>NO2</th><th> </th><th>CO</th><th> </th><th>O3</th></tr><tr><td>μg/m3</td><td> </td><td> μg/Nm3</td><td> </td><td>mg/m3</td><td> </td><td> μgr/m3</td></tr><tr><td>255</td><td> </td><td>10</td><td> </td><td>143</td><td> </td><td>76</td></tr></table> "
);
// --------------

//Obtiene la leyenda
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
    console.log(divEco);
    divs.forEach((element) => {
      console.log((element.style.display = "none"));
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
    console.log(divEco);
    divs.forEach((element) => {
      console.log((element.style.display = "inherit"));
    });
    divEco.style.display = "inherit";
    leyenda.classList.add("expandido");
  }
});

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
  for(let button of selectedButtons) {
    button.classList.remove('selected');
  } // for
  // activamos el boton que se haya pulsado
  botonPulsado.classList.add('selected');
  switch (true) {
    case (tipo == 1 && tipoSeleccionado != 1):
      // CO2
      console.debug("CO seleccionado")
      tipoSeleccionado = 1;
      obtenerTipo(tipoSeleccionado, actualizarLeyenda);
      break;
    case (tipo == 2 && tipoSeleccionado != 2):
      // CO
      console.debug("CO2 seleccionado")
      tipoSeleccionado = 2;
      obtenerTipo(tipoSeleccionado, actualizarLeyenda);
      break;
    case (tipo == 3 && tipoSeleccionado != 3):
      // O3
      console.debug("O3 seleccionado")
      tipoSeleccionado = 3;
      obtenerTipo(tipoSeleccionado, actualizarLeyenda);
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

  const leyendaAlto = document.getElementById('leyendaAlto');
  const leyendaMedio = document.getElementById('leyendaMedio');
  const leyendaBajo = document.getElementById('leyendaBajo');

  leyendaBajo.innerHTML = tipoJson[0].riesgo_leve;
  leyendaMedio.innerHTML = tipoJson[0].riesgo_medio;
  leyendaAlto.innerHTML = tipoJson[0].riesgo_alto;
}