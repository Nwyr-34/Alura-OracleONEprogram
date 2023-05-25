function diferenciaEdad(miEdad, hermanoEdad){
    let diferencia = miEdad - hermanoEdad;
    return diferencia;
}

function saltarlinea(){
    document.write("<br>");
    document.write("<hr>");
}

function imprimir(frase){
    document.write("<big>"+frase+"</big>");
    saltarlinea();
}

let edadActual = 25;
let hermanoEdad = 13;

imprimir("Nuestra diferencia de edad es: " + diferenciaEdad(edadActual,hermanoEdad))