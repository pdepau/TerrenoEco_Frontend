var mymap = L.map('map').setView([38.996491, -0.164783], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmVycmFuZ3Y5OCIsImEiOiJja3dhM2ExcWkwZjdlMnNxbGllNHk1djNtIn0.jp_9QtnYaRwvjpgKsQmWWg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


var EcoParadaMarker = L.icon({
    iconUrl: 'img/Ecoparada.png',
    //shadowUrl: 'img/Ecoparada.png',

    iconSize: [55, 55], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [5, -76] // point from which the popup should open relative to the iconAnchor
});

//var marker = L.marker([38.996852, -0.165307]).addTo(mymap);
var marker = L.marker([38.996852, -0.165307], {
    icon: EcoParadaMarker
}).addTo(mymap);



marker.bindPopup("<b>ECOPARADA!</b><br>Aqui se ponen cositas sobre la ecoparada");
