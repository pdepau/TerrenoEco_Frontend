<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MAPA | Terreno Eco</title>

    <link rel="stylesheet" href="css/header-menu.css">
    <link rel="stylesheet" href="css/mapa.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>


    <style>
        .nav-mapa a {
            color: #830053;
        }
    </style>
</head>

<body>

    <?php include_once 'header-menu.php' ?>
    <div id="contenedor">
        <!-- UTILIZAR ESTE DIV COMO BODY-->

        <!-- MAPA-->
        <div id="map">
            <!--imagen mapa placeholder-->
            <!--<img src="img/placeholder-mapa.png" alt="mapa" id="mapa-img">-->
        </div>



        <!-- AQUI TERMINA EL MAPA-->
        <div class="filtros">
            <div id="switch">
                <button id="switchB1" class="selected" onclick='selectorCambiado(1, this)'>CO</button>

                <button id="switchB2" class="" onclick='selectorCambiado(2, this)'>CO₂</button>

                <button id="switchB3" class="" onclick='selectorCambiado(3, this)'>O₃</button>

            </div>
            <div class="toggle-fechas">
                Seleccionar fechas
                <label class="switch">
                    <input type="checkbox" id="seleccionFecha">
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="selectores" id="selectores">
                <div class="selector-fecha">
                    <label for="fecha">Fecha :</label>
                    <input type="date" id="fecha" name="fecha-inicio-medidas" min="2021-09-01" max="2022-09-01">
                </div>
                <div class="selector-hora">
                    <label for="hora">Hora :</label>
                    <select name="hora" id="hora">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                    </select>
                </div>
            </div>
        </div>

        <div id="leyenda" class="expandido">
            <h1>Leyenda</h1>
            <div id="leyendaAlto" class="leyenda-valor leyenda-alto">Alto</div>
            <div id="leyendaMedio" class="leyenda-valor leyenda-medio">Medio</div>
            <div id="leyendaBajo" class="leyenda-valor leyenda-bajo">Bajo</div>
            <div class="leyenda-valor leyenda-sin-registro">Sin registro</div>
            <div class="ecoparada-leyenda"><img src="img/Ecoparada.png" alt="ecoparada" id="ecoparada-img">Ecoparada</div>
        </div>

    </div>

</body>

<script src="js/heatmap.min.js"></script>
<script src="js/leaflet-heatmap.js"></script>
<script src="js/Punto.js"></script>
<script src="js/proxy.js"></script>
<script src="js/leaflet-idw.js"></script>
<script src=js/mapa.js></script>


<script>
    ponerUbicacion()
</script>

</html>