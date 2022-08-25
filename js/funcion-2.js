/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
  sólo por minúsculas o por una mezcla de ambas.*/

  function cadena (texto){
    //para saber si es mayuscula se usa el toUpperCase
    if(texto === texto.toUpperCase()){
        document.write("el texto ingresado es completamente en mayuscula");

    }else{
        //para saber si el texto es en minuscula
        if(texto === texto.toLowerCase()){
            document.write("El texto ingresado es completamente en minuscula");
        }else{
            document.write("El texto ingresado tiene mayuscula y minuscula");
        }
    }
  }

  let texto=prompt("ingrese un texto");

  cadena(texto);
