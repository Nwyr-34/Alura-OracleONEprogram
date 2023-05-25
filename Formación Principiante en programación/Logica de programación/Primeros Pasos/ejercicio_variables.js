function saltarlinea(){
    document.write("<br>");
}

function imprimir(frase){
    document.write(frase);
    saltarlinea();
}


var anio = 2023;
var res1 = anio - 2003;
var res2 = anio - 1994;
var res3 = anio - 1999;


imprimir("Pedro tiene: " + (res1) + " años")
imprimir("Luis tiene: " + (res2) + " años")
imprimir("Carlos tiene: " + (res3) + " años")

var cantEdades = 3;
var edadPedro = res1; 
var edadLuis = res2; 
var edadCarlos = res3; 
var nombre1 = "Pedro"
var nombre2 = "Luis"
var nombre3 = "Carlos"

var summEdades = edadPedro+edadLuis+edadCarlos; 
promedio = summEdades/cantEdades;
imprimir("El promedio de edades de "  + nombre1 +  
" , "+ nombre2 + " y " + nombre3 + " es: " + Math.round(promedio)); 
