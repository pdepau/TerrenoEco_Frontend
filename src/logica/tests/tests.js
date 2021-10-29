// -----------------------------------------------------------------
// Autor: Luis Belloch
// Descripcion: Tests del servidor proxy
// Creado: 05/10/2021
// -----------------------------------------------------------------

// Import the dependencies for testing
import obtenerTodasLasMedidas from '../proxy.js';

try {
    resultado = await obtenerTodasLasMedidas();
    if(resultado.length > 1) {
        console.info("Tarea completada");
    }
} catch (error) {
    console.error(error);
}