// don't forget to include leaflet-heatmap.js

var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmVycmFuZ3Y5OCIsImEiOiJja3dhM2ExcWkwZjdlMnNxbGllNHk1djNtIn0.jp_9QtnYaRwvjpgKsQmWWg', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
});

var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  radius: 0.01,
  maxOpacity: 0.5,
  // scales the radius based on map zoom
  scaleRadius: true,
  // which field name in your data represents the latitude - default "lat"
  latField: "lat",
  // which field name in your data represents the longitude - default "lng"
  lngField: "lng",
  // which field name in your data represents the data value - default "value"
  valueField: "count",
};

var heatmapLayer = new HeatmapOverlay(cfg);

var map = new L.Map("map", {
  center: new L.LatLng(38.996852, -0.165307),
  zoom: 13,
  layers: [baseLayer, heatmapLayer],
});

let bounds = map.getBounds();

async function f1(x) {
  let delta = Math.abs(bounds._southWest.lng - bounds._northEast.lng);
  let datos = interpolarMediciones(x, 4);
  medidasAgeoson(datos)
}

let fechaMax = 1637868163754; //new Date().getTime()
let fechaMin = fechaMax - 3600000;

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

function medidasAgeoson(medidas) {
  console.log(medidas)
  var GeoJSON_medidas = {
    max: 100,
    data: medidas,
  };
  llenarMapa(GeoJSON_medidas);
}

function llenarMapa(puntos) {
  heatmapLayer.setData(puntos);
}

map.on("moveend", function (ev) {
  let bounds = map.getBounds();

  let fechaMax = 1637868163754; //new Date().getTime()
  let fechaMin = fechaMax - 3600000;

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
  console.log("move");
});

var EcoParadaMarker = L.icon({
  iconUrl: 'img/Ecoparada.png',
  //shadowUrl: 'img/Ecoparada.png',

  iconSize: [50, 50], // size of the icon
  //shadowSize: [50, 64], // size of the shadow
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
});

//var marker = L.marker([38.996852, -0.165307]).addTo(mymap);
var marker = L.marker([38.996852, -0.165307], {
  icon: EcoParadaMarker
}).addTo(map);



marker.bindPopup("<b>ECOPARADA!</b><br>Aqui se ponen cositas sobre la ecoparada");
