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

function calcularIMC(peso, altura){
    return imc = peso / (altura*altura )
}

let imcManu= calcularIMC(70,1.70)
let imcSergio= calcularIMC(80,1.80)

imprimir("El promedio de los indices de Manuel y Sergio es " + (imcManu+imcSergio)/2)
imprimir("El promedio de los indices de Luisa y Mariana es " + (calcularIMC(65,1.75) + calcularIMC(57,1.65))/2)



//-----------------------------------
//Interactuando con el usuario 
nombre = prompt("Ingrese su nombre")
pesoInfo =  prompt(nombre +", Ingrese su peso")
alturaInfo = prompt(nombre+", Ingrese su altura80")

imcCalculado = calcularIMC(pesoInfo,alturaInfo)
imprimir(nombre + " su IMC calculado es "+ imcCalculado)