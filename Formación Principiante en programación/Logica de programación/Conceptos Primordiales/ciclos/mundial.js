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

var worldCup = 1930
var limit = parseInt(prompt("Ingrese el año límite para calcular: "))

while (worldCup <= limit){
    imprimir("Año mundial de la FIFA: " + worldCup)
    worldCup += 4
}
imprimir("fin")