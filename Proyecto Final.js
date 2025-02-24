//Precio base de la cotización
var precio_base = 2000

//Valores de los recargos
var edad_18 = 0.1
var edad_25 = 0.2
var edad_50 = 0.3

var casado_18 = 0.1
var casado_25 = 0.2
var casado_50 = 0.3

var hijos_recargo = 0.2

//Recargo
var recargo = 0
var recargo_total = 0

//Precio Final 
var precio_final = 0

//Mensaje de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor");
var edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números"));

//Comprobamos la edad del conyuge, solamente si está casado/a
var casado = prompt("¿Está casado actualmente?");
var edad_conyuge = 0;
if("SI" == casado.toUpperCase()){
    edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a?"));
}
//Convirtiendo las edades ingresadas a números
var edad_numero = parseInt(edad);
var edad_conyuge_numero = 0;
 //Conviertiendo la edad del conyuge si está casado/a
if("SI" == casado.toUpperCase()){
    edad_conyuge_numero = parseInt(edad_conyuge);
}

//Comprobamos la cantidad de hijos, solamente si los tienen
var hijos = prompt("¿Tiene hijos/a?");
var cantidad_hijos = 0;
if("SI" == hijos.toUpperCase()){
    cantidad_hijos = parseInt(prompt("¿Cuantos hijos tiene?"));
}
//Convertimos la cantidad de hijos a número
var edad_numero = parseInt(edad);
var edad_cantidad_hijos_numero = 0; 
if("SI" == hijos.toUpperCase()){
    edad_cantidad_hijos_numero = parseInt(cantidad_hijos);
}

//Calculamos el recargo total basado en las respuestas ingresadas
if("SI" == hijos.toUpperCase()){
    recargo = precio_base * hijos_recargo;
    recargo_total = recargo_total + recargo;
}
 
//Calculamos recargo por edad del usuario
if(edad_numero >= 18 && edad_numero < 25){
    recargo = precio_base * edad_18;
    recargo_total = recargo_total + recargo;
 }
 else if(edad_numero >= 25 && edad_numero < 50){
    recargo = precio_base * edad_25;
    recargo_total = recargo_total + recargo;
 }
else if(edad_numero >= 50){
    recargo = precio_base * edad_50;
    recargo_total = recargo_total + recargo;
}

//Calcular recargo por edad del conyuge
if(edad_conyuge_numero >= 18 && edad_conyuge_numero < 25){
    recargo = precio_base * casado_18;
    recargo_total = recargo_total + recargo;
}
else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50){
    recargo = precio_base * casado_25;
    recargo_total = recargo_total + recargo;
}
else if(edad_conyuge_numero >= 50){
    recargo = precio_base * casado_50;
    recargo_total = recargo_total + recargo;
}

precio_final = precio_base + recargo_total;
console.log("El precio final es: " + precio_final);

alert ("Para el asegurado "+ nombre);
alert ("El recargo total sera de: "+ recargo_total);
alert ("El precio será de: "+ precio_final); 
//Resultado 