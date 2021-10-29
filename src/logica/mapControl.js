// -----------------------------------------------------------------
// Autor: Luis Belloch
// Descripcion: Crea un mapa y tiene funciones para su uso
// Creado: 14/10/2021
// -----------------------------------------------------------------

// --------------------------------------------------------------
//#region Mapa
// --------------------------------------------------------------
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
// Configurador del mapa
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-96, 37.8],
  zoom: 3
});

class mapControl {

  // Objeto JSON donde guardar las medidas
  /* Estructura
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [latitud, longitd]
      },
      properties: {
        title: 'Valor',
        description: valor de medida,
      }
    }
  ]
  
  */
  static geojson = {
      type: 'FeatureCollection',
      features: [
      ]
  };
    
  /**
   * json:texto -> addMarkers()
   * Anyade marcadores al mapa recogiendo un objeto json con datos
   * 
   * @param {json} json con los datos a representar
   */
  static addMarkers(json) {
    // Tomamos los datos y convertimos a un objeto Medida
    json.forEach(medida => {
      mapControl.geojson.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [parseInt(medida.Latitud), parseInt(medida.Longitud)]
        },
        properties: {
          title: 'Valor',
          description: medida.Valor,
        }
      })
    });
    
    // add markers to map
    for (const { geometry, properties } of mapControl.geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map with popup
      new mapboxgl.Marker(el)
      .setLngLat(geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>${properties.title}</h3><p>${properties.description}</p>`)
      )
      .addTo(map);
    }
  }
};

export default mapControl;