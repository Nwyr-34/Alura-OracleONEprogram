function saltarlinea(){
    document.write("<br>");
    document.write("<br>");
    document.write("<hr>");
    document.write("<br>");
}

function imprimir(frase){
    document.write(frase);
    saltarlinea()

}

function random(range){
    return Math.round(Math.random()*range)
}

//-----------------------------------
// //Interactuando con el usuario 
// var numImput = parseInt(prompt("Ingrese el límite a jugar"))
var numSet = random(15)
var numTry = parseInt(prompt("Ingrese un numero entre 0 y 15"))
if (numSet == numTry)
    imprimir("Ganaste")
else if(numTry < numSet)
    imprimir("El numero era mayor, -> "+numSet)
else 
    imprimir("El numero era menor, -> " + numSet)




/*
var edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad < 18 )
    imprimir("No puedes conducir")
if (edad >= 18){
    var tieneLicencia = prompt("¿Tienes licencia? Responde S o N")
    if(tieneLicencia == 'N')
        imprimir("No puedes conducir")
    if(tieneLicencia == 'S')
        imprimir("Puedes conducir")
}
*/