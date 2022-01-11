// -------------------------------------------------------------
// Autores: Luis Belloch
// Descripción: Funciones y configuracion del mapa de interpolacion (DESUSO)
// Fecha: 26/12/2021
// -------------------------------------------------------------
var map = L.map('map').setView([-37.87, 175.475], 12);

var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var idw = L.idwLayer(points,{
        opacity: 0.3,
        maxZoom: 18,
        cellSize: 10,
        exp: 3,
        max: 1200
    }).addTo(map);

//Vuelve a obtener la fecha
let fechaMax = 1640524043187; //new Date().getTime()
let fechaMin = fechaMax - 3600000;

//Recalcula el objeto para la llamada
let datos = {
latMax: bounds._northEast.lat,
latMin: bounds._southWest.lat,
lonMax: bounds._northEast.lng,
lonMin: bounds._southWest.lng,
tiempoMin: fechaMin,
tiempoMax: fechaMax,
factor: factorInterpolacion,
tipo: tipoSeleccionado,
};

obtenerMedicionesAcotadas(datos, callbackDatosRecibidos);

function callbackDatosRecibidos(datos) {
    let medidas = JSON.parse(datos);

    let puntos = [];
    medidas.forEach((element) => {
        puntos.push([
        element.lat,
        element.lng,
        element.valor/100 // para que este entre 0 y 1
        ]);
    });

    idw.data = puntos;
    console.debug(idw.data);
}