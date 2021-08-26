function mostrarDatos(){

    var numeroBinarioObtenido = document.getElementById('numero-Binario').value;
    
    var Texto = "";

    Texto += numeroBinarioObtenido + "\n";

    document.getElementById("mostrarTexto-Binarios").innerHTML = Texto;

}
