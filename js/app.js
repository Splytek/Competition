function mostrarDatos(){

    //var numeroBinarioTxt = document.getElementById("numero-Binario").value; //obtenemos el valor del input

    var numeroBinario = document.getElementById('numero-Binario').value;

    //numero 
    var numeroC = parseInt(numeroBinario); 

    //CODIGO ASCII
    if(numeroC> String.fromCharCode(48) && String.fromCharCode(57)<numeroC){
      alert("estas entre los numeros 0 y 9");
    } else {
      alert("No entras");
    }

}





    
/*     if(numeroBinarioText.length <= 15){
      var texto = numeroBinarioText;
      document.getElementById("mostrarTexto-Binarios").innerHTML = texto;
    } else {
      alert('Solo se permiten 15 numeros');    
    } */


/*     for(i=0; i<10; 1++){
      if(){

      }
    } */
