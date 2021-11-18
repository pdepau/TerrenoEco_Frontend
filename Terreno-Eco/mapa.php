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


    <script src="https://kit.fontawesome.com/a81368914c.js"></script>


</head>

<body>
    <?php include_once 'header-menu.php' ?>

    <div id="contenedor">
        <!-- UTILIZAR ESTE DIV COMO BODY-->

        <!-- MAPA-->
        <div id="contenedor-mapa">
            <img src="img/placeholder-mapa.png" alt="mapa" id="mapa">
        </div>

        <!-- AQUI TERMINA EL MAPA-->

        <div id="leyenda">
            <h1>Leyenda</h1>
            <div class="leyenda-valor leyenda-alto">Alto</div>
            <div class="leyenda-valor leyenda-medio">Medio</div>
            <div class="leyenda-valor leyenda-bajo">Bajo</div>
            <div class="leyenda-valor leyenda-sin-registro">Sin registro</div>
            <div class="ecoparada-leyenda"><img src="img/Ecoparada.png" alt="ecoparada" id="ecoparada-img">Ecoparada</div>
        </div>



    </div>
</body>

</html>
