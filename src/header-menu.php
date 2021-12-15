<?php if (!isset($path)) $path = "./" ?>


<!--        HEADER  -->
<header id="header">
    <link rel="shortcut icon" href="img/favicon.png">

    <a href="#" onclick="burgerMenu()"><i class="bi bi-list"></i></a>
    <a href="<?php echo $path ?>mapa.php" class="logo"><img src="<?php echo $path ?>img/logo-header.png" alt="logo"></a>

</header>
<div id="space-header"></div>
<!-- -------------------------------------------------------------------------------------------------------------------------- -->
<!--        TERMINA EL HEADER -->

<!-- SECCIONES DEL MENU -->


<!--MENU SIN DESPLEGAR-->
<nav id="menu-desplegable-chiquito">
    <ul class="lista-menu lista-menu-chiquito">
        <li class="nav-link nav-mapa">
            <a alt="mapa" href="<?php echo $path ?>mapa.php">
                <i class="bi bi-map"></i>
            </a>
        </li>

        <li class="nav-link nav-clasificacion">
            <a alt="clasificacion" href="<?php echo $path ?>clasificacion.php" id="servicios">
                <i class="bi bi-trophy"></i>
            </a>

        </li>

        <li class="nav-link nav-datos">
            <a alt="Mis datos" href="<?php echo $path ?>misMedidas.php">
                <i class="bi bi-clipboard-data"></i>


            </a>
        </li>

        <li class="nav-link nav-informacion">
            <a alt="Informacion" href="<?php echo $path ?>salud.php">
                <i class="bi bi-bookmark-heart"></i>
            </a>
        </li>
    </ul>

    <!-- ----------------- -->
</nav>




<!--MENU DESPLEGADO-->
<nav id="menu-desplegable-grandote">
    <ul class="lista-menu lista-menu-grandote">
        <li class="nav-link nav-mapa">
            <a alt="mapa" href="<?php echo $path ?>mapa.php">
                <i class="bi bi-map"></i>
                Mapa</a>
        </li>

        <li class="nav-link nav-clasificacion">
            <a alt="clasificacion" href="<?php echo $path ?>clasificacion.php" id="servicios">
                <i class="bi bi-trophy"></i>
                Clasificacion</a>
        </li>

        <li class="nav-link nav-datos">
            <a alt="Mis medallas" href="<?php echo $path ?>misMedidas.php">
                <i class="bi bi-clipboard-data"></i>
                Mis medallas</a>
        </li>

        <li class="nav-link nav-informacion">
            <a alt="Efectos en la salud" href="<?php echo $path ?>salud.php">
                <a alt="Informacion" href="<?php echo $path ?>salud.php">
                    <i class="bi bi-bookmark-heart"></i>
                    Efectos en la salud
                </a>
            </a>
        </li>
    </ul>

    <!-- ----------------- -->
</nav>

<!-- -------------------------------------------------------------------------------------------------------------------------- -->
<!--        TERMINA EL MENU DESPLEGABLE -->



<script>
    var aux = 1;

    function burgerMenu() {
        if (aux) {
            document.getElementById("menu-desplegable-grandote").style.left = "0";
            document.getElementById("menu-desplegable-grandote").style.animation = "desplegarDerecha 0.1s linear 1";

            document.getElementById("menu-desplegable-chiquito").style.left = "-260px";
            document.getElementById("menu-desplegable-chiquito").style.animation = "desplegarIzquierda 0.1s linear 1";

            aux = 0;
        } else {
            document.getElementById("menu-desplegable-grandote").style.left = "-260px";
            document.getElementById("menu-desplegable-grandote").style.animation = "desplegarIzquierda 0.1s linear 1";

            document.getElementById("menu-desplegable-chiquito").style.left = "0";
            document.getElementById("menu-desplegable-chiquito").style.animation = "desplegarDerecha 0.1s linear 1";
            aux = 1;
        }


    }
</script>