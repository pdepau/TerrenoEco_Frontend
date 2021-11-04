// -----------------------------------------------------------------
// Autor: Luis Belloch
// Descripcion: UX del usuario
// Creado: 04/11/2021
// -----------------------------------------------------------------

import mapControl from "../logica/mapControl.js";
import {obtenerTodasLasMediciones} from "../logica/proxy.js";

let botonMedidas = document.getElementById("botonMedidas");
botonMedidas.addEventListener("click", botonObtenerTodasLasMediciones, false);

async function botonObtenerTodasLasMediciones () {
    let mediciones = await obtenerTodasLasMediciones();
    console.log(mediciones);
    mapControl.addMarkers(mediciones);
}
