function debug(datos) {
  datos = JSON.parse(datos);
  console.log(datos);
  console.log(Object.values(datos[0]));
}

function crearDiv(id, estado, usuario, tiempo) {

  let estadoNodo = estadoDelNodo(tiempo) ;


  let div =
    '<div class="nodo">' +
    '<div class="categoria-nodo">' +
    '<div class="leyenda-nodo">Estado:</div>' +
    '<div class="estado-nodo '+estadoNodo[0]+'">' +
    estado +
    "</div>" +
    "</div>" +
    '<div class="categoria-nodo">' +
    '<div class="leyenda-nodo">ID Nodo:</div>' +
    '<div class="id-nodo">' +
    id +
    "</div>" +
    "</div>" +
    '<div class="categoria-nodo">' +
    '<div class="leyenda-nodo">Usuario:</div>' +
    '<div class="usuario-nodo">' +
    usuario +
    "</div>" +
    "</div>" +
    '<div class="categoria-nodo">' +
    '<div class="leyenda-nodo">Última medición:</div>' +
    '<div class="tiempo-nodo">' +
    estadoNodo[1] +
    "</div>" +
    "</div>" +
    "</div>";

  return div;
}

function rellenarLista(datos) {
  let lista = document.getElementById("lista-nodos");
  lista.innerHTML = "";
  datos = JSON.parse(datos);


  datos.forEach((nodo) => {
    lista.innerHTML += crearDiv(nodo.ID, nodo.descripcion, nodo.nombre,Object.values(nodo)[3]);
  });
}


function estadoDelNodo(tiempo){
    let dia = 1000*60*60*24;
    let hora = 1000*60*60;
    let minute = 1000*60;
    let tiempoActual = new Date();
    
    if(tiempoActual - tiempo > dia){
      let diasPasados = parseInt((tiempoActual-tiempo)/dia)
      return ["mal",("Hace "+diasPasados + " dias.")]
    }else if(tiempoActual - tiempo > hora){
      let horas = parseInt((tiempoActual-tiempo)/hora)
      return ["bien",("Hace "+ horas + " horas.")]
    }
    let minutos = parseInt((tiempoActual-tiempo)/minute)
    return ["bien",("Hace "+ minutos + " minutos.")]
}

obtenerTodosLosNodos(rellenarLista);
