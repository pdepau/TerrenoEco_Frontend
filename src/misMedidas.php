<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MIS MEDALLAS | Terreno Eco</title>

    <link rel="stylesheet" href="css/header-menu.css">
    <link rel="stylesheet" href="css/misMedidas.css">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">

    <script src="https://kit.fontawesome.com/a81368914c.js"></script>

    <style>
        .nav-datos a {
            color: #830053;
        }
    </style>

</head>

<body>

    <?php include_once 'header-menu.php' ?>

    <div id="contenedor">
        <!-- UTILIZAR ESTE DIV COMO BODY-->
        <section id="seccion-sensores">
            <div class="sensor-1 sensor">
                <div class="sensor-titulo">
                    <div class="circulo"></div>
                    <div class="sensor-titulo-texto">Sensor Conectado</div>
                </div>
                <hr>
                <div class="sensor-ultimas-medidas">
                    Última medicion: <br>
                    Tipo: CO2 <br>
                    Valor: 23 <br>
                    Fecha : 12:32:54 17/10/2021 <br>
                    Lat : 34,3443 N <br>
                    Lon : 34,3443 E
                </div>
            </div>
            <div class="sensor-2 sensor">
                <div class="sensor-titulo">
                    <div class="circulo"></div>
                    <div class="sensor-titulo-texto">Sensor Conectado</div>
                </div>
                <hr>
                <div class="sensor-ultimas-medidas">
                    Última medicion: <br>
                    Tipo: CO2 <br>
                    Valor: 23 <br>
                    Fecha : 12:32:54 17/10/2021 <br>
                    Lat : 34,3443 N <br>
                    Lon : 34,3443 E
                </div>
            </div>
        </section>
        <section id="seccion-valores">
            <div class="contenedor-valores">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Valor</th>
                            <th>  </th>
                            <th>  </th>
                            <th>Fecha</th>
                            <th>Ubicación</th>
                        </tr>
                    </thead>
                    <tbody id="listaMedidas">
                        <tr>
                            <td>CO2</td>
                            <td class="td-valor">23</td>
                            <td></td>
                            <td class="vl"></td>
                            <td>12:32:54 17/10/202</td>
                            <td>Lat : 34,341143 N Lon : 34,311443 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section id="seccion-graficas">
            <img src="img/placeholder-graficas.png" alt="">
        </section>
    </div>
</body>

<script src="js/proxy.js"></script>
<script src="js/misMedidas.js"></script>

</html>
