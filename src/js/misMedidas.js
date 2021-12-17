let tipos = ["CO₂","SO₂","NO₂","CO","O₃"]
let valoresParaTipos = [];
let usuario = 1;
let cuantas = 100;

obtenerUltimasMedicionesDeUsuario(obtenerValoresParaTipos,usuario,cuantas)

/**
 * Mostrar un JSON en forma de Array por consola
 * @param {JSON} cosa JSON con los datos a mostrar
 */
function mostrarPorConsola(cosa){
    
    let datos = JSON.parse(cosa)
    console.log(datos)
}

/**
 * Rellenar la tabla con las medidas
 * 
 * @param {JSON} JSONMedidas lista de medidas en formato JSON
 */
function rellenarTablaConMedidas(JSONMedidas){
    let medidas = JSON.parse(JSONMedidas)
    let tabla = document.getElementById("listaMedidas")
    tabla.innerHTML = "";
    console.log(valoresParaTipos)
    medidas.forEach(medida => {
        tabla.innerHTML += crearDivTabla(medida.tipo,medida.valor,medida.tiempo,medida.latitud,medida.longitud)
    });
}


/**
 * Obtiene los rangos para los tipos
 * 
 * @param {JSON} JSONMedidas JSON para la llamada interna al rellenado del div  
 */
function obtenerValoresParaTipos(JSONMedidas){ 
    //Esta en un número fijo de forma temporal, porque
    for(let i = 1;i<5;i++){
        obtenerTipo(i,function(datos){
            valoresParaTipos[i] = JSON.parse(datos)
            if(i==4){
                rellenarTablaConMedidas(JSONMedidas);
            }
            
        })
        
    }
   
}


/**
 * Crear los rows para la tabla
 * 
 * @param {int} tipo tipo de la medida
 * @param {int} valor valor de la medida
 * @param {long} tiempo tiempo en milis de la medida
 * @param {float} lat latitud
 * @param {float} lon longitud
 */
function crearDivTabla(tipo,valor,tiempo,lat,lon){

    var date = new Date(parseInt(tiempo)); // create Date object

    var options = { hour: 'numeric',minute:'numeric',second:'numeric', year: 'numeric', month: 'long', day: 'numeric' };

    let tipoMedida = "bueno";

    if(valoresParaTipos[tipo][0].riesgo_alto < valor){
        tipoMedida = "malo"
    }else if(valoresParaTipos[tipo][0].riesgo_medio < valor){
        tipoMedida = "regular"
    }

    let div = "<tr>"+
    "<td>"+tipos[tipo]+"</td>"+
    "<td class='td-valor-"+tipoMedida+"'>"+valor+"</td>"+
    "<td></td>"+
    "<td class='vl'></td>"+
    "<td>"+date.toLocaleDateString("es-ES",options)+"</td>"+
    "<td>Lat : "+lat+" Lon : "+lon+" </td>"+
    "</tr>"

    return div
}