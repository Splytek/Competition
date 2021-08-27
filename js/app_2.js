  //Funcion medida de la Figura Geometrica

  function mFigura(){
    var x = document.getElementById("tipoFormula").value; //valor obtenido del elemento
    var y = document.getElementById("tipoFigura").value;

    //Evaluar el valor obtenido, ya sea "Area" o "Perimetro"
    if(x == "Area"){
 
      if(y == "Cuadrado"){
          document.getElementById("miImagenFigura").src = 'imgs/Square.png';
          document.getElementById("mFormula").innerHTML = 'Area = Lado * Lado';
      } else if(y == "Triangulo"){
          document.getElementById("miImagenFigura").src = 'imgs/Triangle.png';
          document.getElementById("mFormula").innerHTML = 'Area = Base * Altura / 2';
          document.getElementById("L1").innerHTML = "Base";
      } else if(y == "Rectangulo"){
          document.getElementById("miImagenFigura").src = 'imgs/Rectangle.png';
          document.getElementById("mFormula").innerHTML = 'Area = Base * Altura"';
      } else if(y == "Circulo"){
          document.getElementById("miImagenFigura").src = 'imgs/Circle.png';
          document.getElementById("mFormula").innerHTML = 'Area = PI * radio^2' 
      } else if(y == "Rombo"){
          document.getElementById("miImagenFigura").src = 'imgs/Rhombus.png';
          document.getElementById("mFormula").innerHTML = 'Area = diagonal Menor * Diagonal Mayor / 2'; 
      }

    } else if(x == "Perimetro"){
        
      if(y == "Cuadrado"){
        document.getElementById("miImagenFigura").src = 'imgs/Square.png';
      } else if(y == "Triangulo"){
        document.getElementById("miImagenFigura").src = 'imgs/Triangle.png';
      } else if(y == "Rectangulo"){
        document.getElementById("miImagenFigura").src = 'imgs/Rectangle.png';
      } else if(y == "Circulo"){
        document.getElementById("miImagenFigura").src = 'imgs/Circle.png';
      } else if(y == "Rombo"){
        document.getElementById("miImagenFigura").src = 'imgs/Rhombus.png';
      }
    
    }

  } //Termino de la Funcion

