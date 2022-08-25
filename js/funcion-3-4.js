/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/
function perimetro (lado1, lado2){

    let p = 2*(lado1 + lado2);
  document.write(`El perimetro de rectangulo es = ${p}`);
}

let lado1 = parseInt( prompt("ingrese un lado del rectangulo"));
let lado2= parseInt (prompt("ingrese el segundo lado del rectangulo"));

perimetro(lado1,lado2);

/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del 
número elegido por el usuario.*/

let numero= parseInt(prompt("ingrese un numero para saber la tabla"));

 function tabla(numero){
    for(let i=1; i<=10 ;i++){
        let calculo= i*numero;
        document.write(`${numero} x ${i} = ${calculo}`);
        document.write("<br>");
    }
 }

 document.write(`<h2>LA TABLA DEL ${numero} ES : </h2>`);

 tabla(numero);


