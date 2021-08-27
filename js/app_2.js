  //Funcion medida de la Figura Geometrica

  function mFigura(){
    var x = document.getElementById("tipoFormula").value; //valor obtenido
    var y = document.getElementById("tipoFigura").value;
    var z = docuemnt.getElementById("").value;
    //evaluar el valor obtenido
    if(x == "Area"){
      //alert("Eres el Area")  
      
      if(y == "Cuadrado"){
        //alert("Elegiste area del cuadrado")
        document.getElementById("miImagenFigura").src = 'imgs/Square.png';
        document.getElementById(mFormula):
        
      } else if(y == "Triangulo"){
        document.getElementById("miImagenFigura").src = 'imgs/Triangle.png';
      } else if(y == "Rectangulo"){
        document.getElementById("miImagenFigura").src = 'imgs/Rectangle.png';
      } else if(y == "Circulo"){
        document.getElementById("miImagenFigura").src = 'imgs/Circle.png';
      } else if(y == "Rombo"){
        document.getElementById("miImagenFigura").src = 'imgs/Rhombus.png';
      }

    } else if(x == "Perimetro"){

      //alert("Eres el Perimetro");
    
    }

  } //Termino de la funcion

