function toggle(elemento) {
    if (elemento.value == "CO") {
        document.getElementById("textoCO").style.display = "block";
        document.getElementById("textoNO2").style.display = "none";
        document.getElementById("textoSO2").style.display = "none";
    } else {
        if (elemento.value == "SO2") {
            document.getElementById("textoCO").style.display = "none";
            document.getElementById("textoNO2").style.display = "none";
            document.getElementById("textoSO2").style.display = "block";
        } else {
            if (elemento.value == "NO2") {
                document.getElementById("textoCO").style.display = "none";
                document.getElementById("textoNO2").style.display = "block";
                document.getElementById("textoSO2").style.display = "none";
            }
        }
    }
}