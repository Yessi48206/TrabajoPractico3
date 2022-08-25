/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
 almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo 
 generado, luego realizar las siguientes acciones:*/
 let ciudades=[];
 let exit= true;
  do{
 
     let ciudad= prompt("ingrese una ciudad y si quiere salir ponga cancelar");
     if(ciudad === null){
         exit= false;
     }else{
         ciudades.push(ciudad);
        
     }
     
 
  }while(exit)
  document.write("<h2> EL PRIMER ARREGLO GENERADO : </h2>");
  document.write("<ul>");
  for(let i=0; i<ciudades.length ;i++){
     document.write(`<li> ${ciudades[i]} </li>`);
  }
  document.write("</ul>");
 
 
     document.write(`<h4>La longitud del arreglo es ${ciudades.length} </h4>`);
     
     //Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
     document.write(`<h3>En la primera posicicon se encuentra = ${ciudades[0]}</h3>`);
     
     document.write(`<h3>En la tercera posicicon se encuentra = ${ciudades[2]} </h3>`);
     
     document.write(`<h3>En la primera ultima posicion se encuentra = ${ciudades[ciudades.length-1]} </h3>`);
     
     //Añade en última posición la ciudad de París.
    
     ciudades.splice(ciudades.length , 1 , "PARIS");
     //Escribe por pantalla el elemento que ocupa la segunda posición.
     document.write(`<h3>En la segunda posicion esta = ${ciudades[1]} </h3>`);
 //Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 ciudades.splice(1 , 1 , "Barcelona");
     //
     document.write("<h2>Añade en última posición la ciudad de París y se sustituye la segunda posicion </h2>");
      document.write("<h2> El nuevo arreglo denerado es : </h2>");
      document.write("<ul>");
      for(let i=0; i<ciudades.length ;i++){
         document.write(`<li> ${ciudades[i]} </li>`);
      }
      document.write("</ul>");