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

        <div id="switch">
            <button id="switchB1" class="selected" onclick='selectorCambiado(1, this)'>CO</button>

            <button id="switchB2" class="" onclick='selectorCambiado(2, this)'>CO₂</buttona>

                <button id="switchB3" class="" onclick='selectorCambiado(3, this)'>O₃</button>

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


<script>ponerUbicacion()</script>

</html>